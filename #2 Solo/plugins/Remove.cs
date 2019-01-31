using System.Collections.Generic;
using System;
using System.Reflection;
using UnityEngine;
using Oxide.Core.Plugins;
using Facepunch;
using Oxide.Game.Rust.Cui;
using Oxide.Core;
using Oxide.Core.Libraries;
using System.Linq;
namespace Oxide.Plugins
{
    [Info("Remove", "Lime", "2.0.61")]
    class Remove : RustPlugin
    {
        static int constructionColl = LayerMask.GetMask(new string[] { "Construction", "Deployable", "Prevent Building", "Deployed" });

        [PluginReference] Plugin Clans;
        [PluginReference] Plugin Friends;
        [PluginReference]  Plugin NoEscape;
        static CuiElementContainer elements = new CuiElementContainer();

        bool IsClanMember(ulong playerID, ulong targetID)
        {
            return (bool)(Clans?.Call("IsTeammate", playerID, targetID) ?? false);
        }

        bool IsFriends(ulong playerID, ulong targetID)
        {
            return (bool)(Friends?.Call("IsFriend", playerID, targetID) ?? false);
        }

        void OnServerInitialized()
        {
            elements.Clear();

            elements.Add(new CuiElement
            {
                Name = "RemoverGUIBackground",
                Parent = "Hud",
                Components =
                {
                    new CuiRawImageComponent
                    {
                        Color = "0 0 0 0.499", Sprite = "Assets/Content/UI/UI.Background.Tile.psd", Material = "Assets/Content/UI/UI.Background.Tile.psd",
                    },

                    new CuiRectTransformComponent
                    {
                        AnchorMin = "0.14968752 0.0231481",
                        AnchorMax = "0.2796875 0.0631481"
                    }
                   
                }

            });
			
            elements.Add(new CuiElement
            {
                Name = "RemoverGUIColor",
                Parent = "RemoverGUIBackground",

                Components =
                {
                    new CuiRawImageComponent
                    {
                        Color = "1.00 0.40 0.00 1.00", Sprite = "Assets/Content/UI/UI.Background.Tile.psd", Material = "Assets/Content/UI/UI.Background.Tile.psd",
                    },
                    new CuiRectTransformComponent
                    {
                        AnchorMin = "0.03 0.12",
                        AnchorMax = "0.96 0.88"
                    }
                },
            });

            elements.Add(new CuiElement
            {
                Name = "RemoverGUIText",
                Parent = "RemoverGUIBackground",

                Components =
                {
                    new CuiTextComponent
                    {
                        Text = "Удаление: <color=#ff7300>{time} сек.</color>",
                        FontSize = 14,
                        Align = TextAnchor.MiddleCenter
                    },
                    new CuiOutlineComponent
                    {
                        Distance = "0.5 -0.5",
                        Color = "0.0 0.0 0.0 0.5"
                    },
                    new CuiRectTransformComponent
                    {
                        AnchorMin = "0 0",
                        AnchorMax = "1 1"
                    }
                },
            });
            InitializeTable();
        }

        private bool CupboardPrivlidge(BasePlayer player, Vector3 position, BaseEntity entity)
        {
            return player.IsBuildingAuthed(position, new Quaternion(0, 0, 0, 0),
                new Bounds(Vector3.zero, Vector3.zero));
        }

        void Loaded()
        {
            PermissionService.RegisterPermissions(this, permisions);
        }

        public List<string> permisions = new List<string>()
        {
            "remove.admin",
            "remove.use"
        };

        void Unload()
        {
            foreach (ToolRemover toolremover in Resources.FindObjectsOfTypeAll<ToolRemover>())
            {
                UnityEngine.Object.Destroy(toolremover);
            }
        }

        private Dictionary<string, int> deployedToItem = new Dictionary<string, int>();

        enum RemoveType
        {
            Normal,
            Admin,
            All
        }

        private void InitializeTable()
        {
            List<ItemDefinition> ItemsDefinition = ItemManager.GetItemDefinitions();

            foreach (ItemDefinition itemdef in ItemsDefinition)
            {
                if (itemdef.Blueprint)
                {
                    var deployable = itemdef.GetComponent<ItemModDeployable>();

                    if (deployable != null)
                    {
                        deployedToItem.Add(itemdef.GetComponent<ItemModDeployable>().entityPrefab.resourcePath, itemdef.itemid);
                    }
                }
            }
        }

        protected override void LoadDefaultConfig() { }

        private void CheckCfg<T>(string Key, ref T var)
        {
            if (Config[Key] is T)
                var = (T)Config[Key];
            else
                Config[Key] = var;
        }

        static int RemoveTimeDefault = 40;
        static int MaxRemoveTime = 120;

        static bool useCupboards = true;
        static bool useRefund = true;
        static bool refundDeployable = true;
        static bool refundStructure = true;
        static bool removeApher = true;

        void Init()
        {
            CheckCfg("Стандарное время удаления (сек)", ref RemoveTimeDefault);
            CheckCfg("Максимальное время удаления (сек)", ref MaxRemoveTime);

            if (MaxRemoveTime > 300)
            {
                MaxRemoveTime = 300;
            }

            CheckCfg("Запретить удаление своих обьектов в BuildingBlock?", ref useCupboards);
            CheckCfg("Запретить удаление чужих обьектов?", ref removeApher);
            CheckCfg("Включить возрат ресурсов?", ref useRefund);
            CheckCfg("Remove - Возрат - Deployables", ref refundDeployable);
            CheckCfg("Remove - Возрат - Structures", ref refundStructure);
            SaveConfig();
        }

        static void PrintToChat(BasePlayer player, string message)
        {
            player.SendConsoleCommand("chat.add", new object[] { 0, message, 1f });
        }

        class ToolRemover : MonoBehaviour
        {
            public BasePlayer player;
            public int endTime;
            public BasePlayer playerActivator;
            public float lastUpdate;
            public RemoveType removeType;

            private int Count;

            void Awake()
            {
                player = GetComponent<BasePlayer>();
                lastUpdate = UnityEngine.Time.realtimeSinceStartup;
            }

            public void ResetDestroy()
            {
                CancelInvoke("DoDestroy");
                Invoke("DoDestroy", endTime);
                Count = 0;
                UpdateGUI();
            }

            public void DelayDestroy()
            {
                Invoke("DoDestroy", endTime);
                InvokeRepeating("UpdateGUI", 0, 1);
            }

            void UpdateGUI()
            {
                CuiHelper.DestroyUi(player, "RemoverGUIBackground");
                CuiHelper.AddUi(player, elements.ToJson().Replace("{time}", "" + (endTime - Count++)));
            }

            void DoDestroy()
            {
                Destroy(this);
            }

            void OnDestroy()
            {
                CuiHelper.DestroyUi(player, "RemoverGUIBackground");
                PrintToChat(player, "Режим удаления <color=#efa94a>выключен</color>");
            }
        }
        void EndRemoverTool(BasePlayer player)
        {
            ToolRemover toolremover = player.GetComponent<ToolRemover>();
            if (toolremover == null) return;
            UnityEngine.Object.Destroy(toolremover);
        }


        object OnHammerHit(BasePlayer player, HitInfo info)
        {
            ToolRemover RemoverClass = player.GetComponent<ToolRemover>();
            
            if (RemoverClass)
            {
                TryRemove(player, info.HitEntity, RemoverClass.removeType);
                RemoverClass.ResetDestroy();
                return false;
            }

            return null;
        }

        void TryRemove(BasePlayer player, BaseEntity removeObject, RemoveType removeType)
        {
            if (removeObject == null)
            {
                PrintToChat(player, "Не найден объект для удаления.");
                return;
            }

            var success = CanRemoveEntity(player, removeObject, removeType);

            if (success is string)
            {
                PrintToChat(player, (string)success);
                return;
            }

            if (removeType == RemoveType.All)
            {
                RemoveAllFrom(removeObject.transform.position);
                return;
            }

            if (useRefund)
                Refund(player, removeObject);

            DoRemove(removeObject);
        }

        List<Vector3> removeFrom = new List<Vector3>();
        int currentRemove = 0;

        void RemoveAllFrom(Vector3 pos)
        {
            removeFrom.Add(pos);
            DelayRemoveAll();
        }

        List<BaseEntity> wasRemoved = new List<BaseEntity>();

        void DelayRemoveAll()
        {
            if (currentRemove >= removeFrom.Count)
            {
                currentRemove = 0;
                removeFrom.Clear();
                wasRemoved.Clear();
                return;
            }
            List<BaseEntity> list = Pool.GetList<BaseEntity>();
            Vis.Entities<BaseEntity>(removeFrom[currentRemove], 3f, list, constructionColl);
            for (int i = 0; i < list.Count; i++)
            {
                BaseEntity ent = list[i];
                if (wasRemoved.Contains(ent)) continue;
                if (!removeFrom.Contains(ent.transform.position))
                    removeFrom.Add(ent.transform.position);
                wasRemoved.Add(ent);
                DoRemove(ent);
            }
            currentRemove++;
            timer.Once(0.01f, () => DelayRemoveAll());
        }

        static void DoRemove(BaseEntity removeObject)
        {
            if (removeObject == null) return;

            StorageContainer Container = removeObject.GetComponent<StorageContainer>();

            if (Container != null)
            {
                DropUtil.DropItems(Container.inventory, removeObject.transform.position, Container.dropChance);
            }

            EffectNetwork.Send(new Effect("assets/bundled/prefabs/fx/item_break.prefab", removeObject, 0, Vector3.up, Vector3.zero) { scale = UnityEngine.Random.Range(0f, 1f) });

            removeObject.KillMessage();
        }

        void Refund(BasePlayer player, BaseEntity entity)
        {
            if (refundStructure && entity is BuildingBlock)
            {
                BuildingBlock buildingblock = entity as BuildingBlock;

                if (buildingblock.blockDefinition == null) return;

                int buildingblockGrade = (int)buildingblock.grade;
                if (buildingblock.blockDefinition.grades[buildingblockGrade] != null)
                {
                    float refundRate = buildingblock.healthFraction / 2; // max 50% only
                    List<ItemAmount> currentCost = buildingblock.blockDefinition.grades[buildingblockGrade].costToBuild as List<ItemAmount>;
                    foreach (ItemAmount ia in currentCost)
                    {
                        int amount = (int)(ia.amount * refundRate);

                        if (amount <= 0 || amount > ia.amount || amount >= int.MaxValue)
                            amount = 1;

                        player.inventory.GiveItem(ItemManager.CreateByItemID(ia.itemid, amount));
                        player.Command("note.inv", ia.itemid, amount); // just notify
                    }

                }
            }
            else if (refundDeployable && deployedToItem.ContainsKey(entity.gameObject.name))
            {
                ItemDefinition def = ItemManager.FindItemDefinition(deployedToItem[entity.gameObject.name]);



                float percent = (entity.Health() / entity.MaxHealth()) / 2;


                foreach (var ingredient in def.Blueprint.ingredients)
                {
                    var reply = 431;
                    var amountOfIngridient = ingredient.amount;
                    var amount = Mathf.Floor(amountOfIngridient * percent);

                    if (amount <= 0 || amount > amountOfIngridient || amount >= int.MaxValue)
                        amount = 1;


                    var ret = ItemManager.Create(ingredient.itemDef, (int)amount);
                    player.GiveItem(ret);

                    player.Command("note.inv", ret, amount);
                }
            }
        }

        object CanRemoveEntity(BasePlayer player, BaseEntity entity, RemoveType removeType)
        {
            if (entity.IsDestroyed) return "Объект уже уничтожен.";
            if (entity.OwnerID == 0) return "Системный объект.";
            object CallResult = Interface.Call("canRemove", player);
            if (CallResult is string)
                return (string)CallResult;

            if (removeApher && IsFriends(entity.OwnerID, player.userID) && IsClanMember(entity.OwnerID, player.userID))
            {
                if (removeType == RemoveType.Admin || removeType == RemoveType.All) return true;
                if (entity.OwnerID != player.userID)
                {
                    return "Вы не имеете права удалять чужие постройки!";
                }
            }
            if (useCupboards)
            {
                if (removeType == RemoveType.Admin || removeType == RemoveType.All) return true;
                var privilege = player.GetBuildingPrivilege(player.WorldSpaceBounds());
                if ((privilege != null && privilege.authorizedPlayers.Count(p => p.userid == player.userID) == 0) || !CupboardPrivlidge(player, entity.transform.position, entity))
                {
                    return "Что бы удалять постройки, вы должны быть авторизированы в <color=#efa94a>шкафу!</color>";
                }
            }
            
            if (IsFriends(entity.OwnerID, player.userID) || IsClanMember(entity.OwnerID, player.userID) || entity.OwnerID == player.userID)
                return true;
            return "Вы не являетесь <color=#efa94a>другом</color> или <color=#efa94a>соклановцем</color> создателя объекта.";
        }


        [ChatCommand("remove")]
        void cmdChatRemove(BasePlayer player, string command, string[] args)
        {
            if (!permission.UserHasPermission(player.UserIDString, "remove.use"))
            {
                SendReply(player, "У тебя нету прав на использование этой команды");
                return;
            }
            int removeTime = RemoveTimeDefault;
            RemoveType removetype = RemoveType.Normal;
            BasePlayer target = player;

            if (args.Length != 0)
            {
                switch (args[0])
                {
                    case "admin":
                        if (!permission.UserHasPermission(player.UserIDString, "remove.admin") && !player.IsAdmin)
                        {
                            SendReply(player, "У тебя нету прав на использование этой команды");
                            return;
                        }
                        removetype = RemoveType.Admin;
                        if (args.Length > 1) int.TryParse(args[1], out removeTime);
                        break;
                    case "all":
                        if (!permission.UserHasPermission(player.UserIDString, "remove.admin") && !player.IsAdmin)
                        {
                            SendReply(player, "У тебя нету прав на использование этой команды");
                            return;
                        }
                        removetype = RemoveType.All;
                        if (args.Length > 1) int.TryParse(args[1], out removeTime);
                        break;
                    default:
                        int.TryParse(args[0], out removeTime);
                        break;
                }
            }
            if (removeTime > MaxRemoveTime) removeTime = MaxRemoveTime;

            ToolRemover toolremover = target.GetComponent<ToolRemover>();

            if (toolremover != null && args.Length == 0)
            {
                EndRemoverTool(player);
                return;
            }

            if (toolremover == null)
                toolremover = target.gameObject.AddComponent<ToolRemover>();

            PrintToChat(player, "Используйте <color=#efa94a>киянку</color> для удаления объектов.");

            toolremover.endTime = removeTime;
            toolremover.playerActivator = player;
            toolremover.removeType = removetype;
            toolremover.DelayDestroy();
        }


        [ConsoleCommand("remove.toggle")]
        void ccmdRemoveToggle(ConsoleSystem.Arg arg)
        {
            var player = arg.Player();

            if (!permission.UserHasPermission(player.UserIDString, "remove.use"))
                {
                    SendReply(player, "У тебя нету прав на использование этой команды");
                    return;
                }
                int removeTime = RemoveTimeDefault;
                RemoveType removetype = RemoveType.Normal;
                BasePlayer target = player;

                if (removeTime > MaxRemoveTime) removeTime = MaxRemoveTime;

                ToolRemover toolremover = target.GetComponent<ToolRemover>();

                if (toolremover != null )
                {
                    EndRemoverTool(player);
                    return;
                }

                if (toolremover == null)
                    toolremover = target.gameObject.AddComponent<ToolRemover>();

                PrintToChat(player, "Используйте <color=#efa94a>киянку</color> для удаления объектов.");

                toolremover.endTime = removeTime;
                toolremover.playerActivator = player;
                toolremover.removeType = removetype;
                toolremover.DelayDestroy();
            
        }
        public static class PermissionService
        {
            public static Permission permission = Interface.GetMod().GetLibrary<Permission>();

            public static bool HasPermission(BasePlayer player, string permissionName)
            {
                if (player == null || string.IsNullOrEmpty(permissionName))
                    return false;

                var uid = player.UserIDString;
                if (permission.UserHasPermission(uid, permissionName))
                    return true;

                return false;
            }

            public static void RegisterPermissions(Plugin owner, List<string> permissions)
            {
                if (owner == null) throw new ArgumentNullException("owner");
                if (permissions == null) throw new ArgumentNullException("commands");

                foreach (var permissionName in permissions.Where(permissionName => !permission.PermissionExists(permissionName)))
                {
                    permission.RegisterPermission(permissionName, owner);
                }
            }
        }
    }

}              