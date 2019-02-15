using System;
using System.Collections.Generic;
using System.Linq;
using Oxide.Core;
using Oxide.Game.Rust.Cui;
using UnityEngine;

namespace Oxide.Plugins
{
    [Info("Furnace Sorter", "Orange", "1.0.1")]
    [Description("Made by Orange#0900")]
    public class FurnaceSorter : RustPlugin
    {
        #region Oxide Hooks

        private void Init()
        {
            cmd.AddConsoleCommand("furnacesort.toggle", this, "Command");
            LoadData();
        }

        private void Unload()
        {
            SaveData();
        }
        
        private void OnLootEntity(BasePlayer player, BaseOven oven)
        {
            CreateGUI(player);
        }
        
        private void OnLootEntityEnd(BasePlayer player, BaseOven entity)
        {
            DestroyGUI(player);   
        }

        #endregion

        #region Commands

        private void Command(ConsoleSystem.Arg arg)
        {
            var player = arg.Player();
            if (player != null)
            {
                var id = player.userID;
                if (disabled.Contains(id))
                {
                    disabled.Remove(id);
                }
                else
                {
                    disabled.Add(id);
                }
                
                CreateGUI(player);
            }
        }

        #endregion

        #region Data
        
        private List<ulong> disabled = new List<ulong>();
        
        private const string filename = "FurnaceSorter_playerData";

        private void LoadData()
        {
            try
            {
                disabled = Interface.Oxide.DataFileSystem.ReadObject<List<ulong>>(filename);
            }
            catch (Exception e)
            {
                PrintWarning(e.Message);
            }

            SaveData();
            timer.Every(600f, SaveData);
        }

        private void SaveData()
        {
            Interface.Oxide.DataFileSystem.WriteObject(filename, disabled);
        }

        #endregion

        #region GUI

        private const string elemHud = "furnacesorter.Hud";

        private void CreateGUI(BasePlayer player)
        {
            CuiHelper.DestroyUi(player, elemHud);
            CuiHelper.AddUi(player, GetUI(player));
        }

        private void DestroyGUI(BasePlayer player)
        {
            CuiHelper.DestroyUi(player, elemHud);
        }

        private CuiElementContainer GetUI(BasePlayer player)
        {
            var enabled = !disabled.Contains(player.userID);
            var text = enabled ? "Выключить сортировку" : "Включить сортировку";
            var color = enabled ? "0.8 0.28 0.2 1" : "0.44 0.52 0.29 0.6";
            
            return new CuiElementContainer
            {
                new CuiElement
                {
                    Name = elemHud,
                    Parent = "Hud.Menu",
                    Components =
                    {
                        new CuiImageComponent
                        {
                            Color  = "0.75 0.75 0.75 0.05"
                        },
                        new CuiRectTransformComponent
                        {
                            AnchorMin = "0.6505 0.022",
                            AnchorMax = "0.829 0.134"
                        }
                    }
                },
                {
                    new CuiButton
                    {
                        Text =
                        {
                            Text = text,
                            Color = "1 1 1 1",
                            Align = TextAnchor.MiddleCenter,
                            FontSize = 17
                        },
                        Button =
                        {
                            Command = "furnacesort.toggle",
                            Color = color,
                        },
                        RectTransform =
                        {
                            AnchorMin = "0.03 0.1",
                            AnchorMax = "0.97 0.9"
                        }
                    },
                    elemHud
                }
            };
        }

        #endregion

        #region Core

        private class OvenSlot
        {
            public Item Item;
            public int? Position;
            public int Index;
            public int DeltaAmount;
        }

        private bool IsSlotCompatible(Item item, BaseOven oven, ItemDefinition itemDefinition)
        {
            ItemModCookable cookable = item.info.GetComponent<ItemModCookable>();

            if (item.amount < item.info.stackable && item.info == itemDefinition)
                return true;

            if (oven.allowByproductCreation && oven.fuelType.GetComponent<ItemModBurnable>().byproductItem == item.info)
                return true;

            if (cookable == null || cookable.becomeOnCooked == itemDefinition)
                return true;

            return false;
        }
        
        private object CanMoveItem(Item item, PlayerInventory inventory, uint targetContainer, int targetSlot)
        {
            var player = inventory.GetComponent<BasePlayer>();
            if (player == null) {return null;}
            if (disabled.Contains(player.userID)) {return null;}
            var container = inventory.FindContainer(targetContainer);

            Func<object> splitFunc = () =>
            {
                if (container == null || container == item.GetRootContainer())
                    return null;

                var oven = container.entityOwner as BaseOven;
                var cookable = item.info.GetComponent<ItemModCookable>();

                if (oven == null || cookable == null)
                    return null;

                int totalSlots = 2 + (oven.allowByproductCreation ? 1 : 0);

                if (cookable.lowTemp > oven.cookingTemperature || cookable.highTemp < oven.cookingTemperature)
                    return null;

                MoveSplitItem(item, oven, totalSlots);
                return true;
            };

            return splitFunc();
        }

        private void MoveSplitItem(Item item, BaseOven oven, int totalSlots)
        {
            var player = item.GetOwnerPlayer();
            var container = oven.inventory;
            var invalidItemsCount = container.itemList.Count(slotItem => !IsSlotCompatible(slotItem, oven, item.info));
            var numOreSlots = Math.Min(container.capacity - invalidItemsCount, totalSlots);
            var totalMoved = 0;
            var totalAmount = Math.Min(item.amount + container.itemList.Where(slotItem => slotItem.info == item.info).Take(numOreSlots).Sum(slotItem => slotItem.amount), item.info.stackable * numOreSlots);
            if (numOreSlots <= 0) {return;}
            var totalStackSize = Math.Min(totalAmount / numOreSlots, item.info.stackable);
            var remaining = totalAmount - totalAmount / numOreSlots * numOreSlots;
            var addedSlots = new List<int>();
            var ovenSlots = new List<OvenSlot>();

            for (var i = 0; i < numOreSlots; ++i)
            {
                Item existingItem;
                var slot = FindMatchingSlotIndex(container, out existingItem, item.info, addedSlots);
                if (slot == -1)
                {
                    return;
                }
                addedSlots.Add(slot);
                var ovenSlot = new OvenSlot
                {
                    Position = existingItem?.position,
                    Index = slot,
                    Item = existingItem
                };
                var currentAmount = existingItem?.amount ?? 0;
                var missingAmount = totalStackSize - currentAmount + (i < remaining ? 1 : 0);
                ovenSlot.DeltaAmount = missingAmount;
                if (currentAmount + missingAmount <= 0) {continue;}
                ovenSlots.Add(ovenSlot);
            }

            foreach (var slot in ovenSlots)
            {
                if (slot.Item == null)
                {
                    var newItem = ItemManager.Create(item.info, slot.DeltaAmount, item.skin);
                    slot.Item = newItem;
                    newItem.MoveToContainer(container, slot.Position ?? slot.Index);
                }
                else
                {
                    slot.Item.amount += slot.DeltaAmount;
                }

                totalMoved += slot.DeltaAmount;
            }

            container.MarkDirty();

            if (totalMoved >= item.amount)
            {
                item.Remove();
                item.GetRootContainer()?.MarkDirty();
            }
            else
            {
                item.amount -= totalMoved;
                item.GetRootContainer()?.MarkDirty();
            }
            
            AddFuel(player, oven);
        }

        private int FindMatchingSlotIndex(ItemContainer container, out Item existingItem, ItemDefinition itemType, List<int> indexBlacklist)
        {
            existingItem = null;
            int firstIndex = -1;
            Dictionary<int, Item> existingItems = new Dictionary<int, Item>();

            for (int i = 0; i < container.capacity; ++i)
            {
                if (indexBlacklist.Contains(i))
                    continue;

                Item itemSlot = container.GetSlot(i);
                if (itemSlot == null || itemType != null && itemSlot.info == itemType)
                {
                    if (itemSlot != null)
                        existingItems.Add(i, itemSlot);

                    if (firstIndex == -1)
                    {
                        existingItem = itemSlot;
                        firstIndex = i;
                    }
                }
            }

            if (existingItems.Count <= 0 && firstIndex != -1)
            {
                return firstIndex;
            }
            else if (existingItems.Count > 0)
            {
                var largestStackItem = existingItems.OrderByDescending(kv => kv.Value.amount).First();
                existingItem = largestStackItem.Value;
                return largestStackItem.Key;
            }

            existingItem = null;
            return -1;
        }

        private void AddFuel(BasePlayer player, BaseOven oven)
        {
            var ores = oven.inventory.itemList.Where(x => x.info.shortname.Contains(".ore")).ToList();
            if (ores.Count == 0) {return;}
            var max = ores.Max(x => x.amount);
            var need = Convert.ToInt32(max * 1.5);
            if (oven.inventory.capacity - oven.inventory.itemList.Count == 0) {return;}
            var items = GetItems("wood", player.inventory.AllItems().ToList());
            TakeItemAmount(items, need, oven.inventory);
        }
        
        private List<Item> GetItems(string name, List<Item> itemList)
        {
            var items = new List<Item>();

            foreach (var obj in itemList)
            {
                if (obj.info.shortname == name && !obj.IsBusy())
                {
                    items.Add(obj);
                }
            }

            return items;
        }
        
        private void TakeItemAmount(List<Item> moveFrom, int amount, ItemContainer moveTO)
        {
            foreach (var item in moveFrom.ToList())
            {
                if (item.amount > amount)
                {
                    item.MarkDirty();
                    item.amount -= amount;
                    var newItem = ItemManager.Create(item.info, amount);
                    newItem.MoveToContainer(moveTO);
                    return;
                }

                amount -= item.amount;
                item.MoveToContainer(moveTO);
            }
        }

        #endregion
    }
}