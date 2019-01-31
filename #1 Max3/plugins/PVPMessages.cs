// Name: PVPMessages
// Documentation: https://gist.github.com/JVCVkrSzVqsfEcwJqk7N/52699a6fc3a09ca89c0bd793efd2a7e8
// Changelog:
// * [1.0.1] Added custom dictionary (to replace ak47u to AK, etc)
// * [1.0.0] Release
// 
// End
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Oxide.Core;
using Oxide.Game.Rust.Cui;
using UnityEngine;

namespace Oxide.Plugins
{
    [Info("PVP Messages", "Orange", "1.0.1")]
    [Description("Show player kills on screen or in chat")]
    public class PVPMessages : RustPlugin
    {
        #region Vars

        private List<string> killsList = new List<string>();
        private string killsString;
        private const string elem = "PVPMessages.Text";
        private Timer destroy;

        #endregion

        #region Oxide Hooks

        private void Unload()
        {
            killsString = string.Empty;
            killsList.Clear();

            foreach (var player in BasePlayer.activePlayerList.ToList())
            {
                CuiHelper.DestroyUi(player, elem);
            }
        }

        private void OnEntityDeath(BasePlayer victim, HitInfo info)
        {
            var attacker = info?.InitiatorPlayer;
            if (victim == null || attacker == null) {return;}
            if (attacker == victim) {return;}
            if (!victim.userID.IsSteamId() || !attacker.userID.IsSteamId()) {return;}
            var name1 = attacker.displayName;
            var name2 = victim.displayName;
            var distance = Convert.ToInt32(Vector3.Distance(attacker.transform.position, victim.transform.position));
            var weapon = info.WeaponPrefab?.ShortPrefabName.Replace(".entity", "") ?? info.damageTypes.GetMajorityDamageType().ToString();
            AddKill(name1, name2, distance, weapon);
        }

        #endregion

        #region Configuration

        private static ConfigData config;

        private class ConfigData
        {
            [JsonProperty(PropertyName = "1. Announce in chat")]
            public bool announceChat;
            
            [JsonProperty(PropertyName = "2. Announce in GUI")]
            public bool announceGUI;
            
            [JsonProperty(PropertyName = "3. Time to destroy GUI without activity")]
            public int freeTime;

            [JsonProperty(PropertyName = "4. Amount of displayed kills")]
            public int kills;

            [JsonProperty(PropertyName = "5. Message format")]
            public string format;
            
            [JsonProperty(PropertyName = "6. Text size")]
            public int textSize;

            [JsonProperty(PropertyName = "7. Maximal nickname length")]
            public int maxNameChars;

            [JsonProperty(PropertyName = "8. Anchor min")]
            public string anchorMin;

            [JsonProperty(PropertyName = "9. Anchor max")]
            public string anchorMax;
            
            [JsonProperty(PropertyName = "10. Custom dictionary")]
            public Dictionary<string, string>  custom = new Dictionary<string, string>();
        }

        private ConfigData GetDefaultConfig()
        {
            return new ConfigData
            {
                freeTime = 30,
                maxNameChars = 10,
                kills = 7,
                format = "<color=orange>{0}</color> killed <color=green>{1}</color> ({2}m, {3})",
                textSize = 15,
                anchorMin = "0.8 0.8",
                anchorMax = "0.99 0.99",
                announceChat = false,
                announceGUI = true,
                custom = new Dictionary<string, string>
                {
                    {"Heat", "Fire"},
                    {"Bleeding", "Blood"},
                    {"lr300", "LR-300"},
                    {"ak47u", "AK"}
                }
            };
        }

        protected override void LoadConfig()
        {
            base.LoadConfig();

            try
            {
                config = Config.ReadObject<ConfigData>();

                if (config == null)
                {
                    LoadDefaultConfig();
                }
            }
            catch
            {
                LoadDefaultConfig();
            }

            SaveConfig();
        }

        protected override void LoadDefaultConfig()
        {
            PrintError("Configuration file is corrupt(or not exists), creating new one!");
            config = GetDefaultConfig();
        }

        protected override void SaveConfig()
        {
            Config.WriteObject(config);
        }

        #endregion

        #region Core

        private void AddKill(string attacker, string victim, int distance, string weapon)
        {
            if (attacker.Length > config.maxNameChars)
            {
                attacker = attacker.Substring(0, config.maxNameChars);
            }

            if (victim.Length > config.maxNameChars)
            {
                victim = victim.Substring(0, config.maxNameChars);
            }

            var text = string.Format(config.format, attacker, victim, distance, GetName(weapon));

            if (config.announceChat)
            {
                Server.Broadcast(text);
            }

            if (!config.announceGUI)
            {
                return;
            }

            if (killsList.Count >= config.kills)
            {
                killsList.RemoveAt(0);
            }

            killsList.Add(text);

            killsString = string.Empty;

            for (var i = killsList.Count - 1; i >= 0; i--)
            {
                killsString += killsList[i] + "\n";
            }

            destroy?.Destroy();
            destroy = timer.Once(config.freeTime, Unload);

            foreach (var player in BasePlayer.activePlayerList.ToList())
            {
                CreateGUI(player);
            }
        }

        private void CreateGUI(BasePlayer player)
        {
            CuiHelper.DestroyUi(player, elem);
            
            var container = new CuiElementContainer();

            container.Add(new CuiElement
            {
                Name = elem,
                Components =
                {
                    new CuiTextComponent
                    {
                        Text = killsString, Align = TextAnchor.UpperRight, FontSize = config.textSize
                    },
                    new CuiOutlineComponent
                    {
                        Color = "0 0 0 0.6", Distance = "1.0 -0.5"
                    },
                    new CuiRectTransformComponent
                    {
                        AnchorMin = config.anchorMin, AnchorMax = config.anchorMax
                    }
                }
            });

            CuiHelper.AddUi(player, container);
        }

        private string GetName(string name)
        {
            if (config?.custom?.ContainsKey(name) ?? false)
            {
                return config.custom[name];
            }

            return name;
        }

        #endregion
    }
}