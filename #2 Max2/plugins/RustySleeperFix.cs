﻿using Oxide.Game.Rust.Cui;
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Globalization;
using UnityEngine;

namespace Oxide.Plugins
{
    [Info("RustySleeperFix", "__red && Hougan", "0.21.199")]
    class RustySleeperFix : RustPlugin
    {
        public class RustySleeperFixConfig
        {
            public bool EnableSleeperDefense { get; set; }

            public static RustySleeperFixConfig Prototype()
            {
                return new RustySleeperFixConfig()
                {
                    EnableSleeperDefense = true,
                };
            }
        }

        private RustySleeperFixConfig m_Config;

        protected override void LoadDefaultConfig()
        {
            m_Config = RustySleeperFixConfig.Prototype();

            PrintWarning("Creating default a configuration file ...");
        }
        protected override void LoadConfig()
        {
            base.LoadConfig();

            m_Config = Config.ReadObject<RustySleeperFixConfig>();
        }
        protected override void SaveConfig()
        {
            Config.WriteObject(m_Config);
        }

        private void OnPlayerRespawned(BasePlayer player)
        {
            if (player == null) return;
            if (!m_Config.EnableSleeperDefense) return;

            RaycastHit info;
            if (Physics.Raycast(player.transform.position, Vector3.down, out info, 0.25f))
            {
                Vector3 newPos = player.GetNetworkPosition();
                newPos.y += 0.25f;
                player.MovePosition(newPos);
                player.ServerPosition = newPos;
            }
            return;
        }

        private object OnPlayerSpawn(BasePlayer player)
        {
            if (player == null) return null;
            if (!m_Config.EnableSleeperDefense) return null;

            RaycastHit info;
            if (Physics.Raycast(player.transform.position, Vector3.down, out info, 0.25f))
            {
                Vector3 newPos = player.GetNetworkPosition();
                newPos.y += 0.25f;
                player.MovePosition(newPos);
                player.ServerPosition = newPos;
            }
            return null;
        }

        void OnPlayerInit(BasePlayer player)
        {
            if (player == null) return;
            if (!m_Config.EnableSleeperDefense) return;
            if(player.IsReceivingSnapshot)
            {
                NextTick(() =>
                {
                    OnPlayerInit(player);
                    return;
                });
            }

            RaycastHit info;
            if(Physics.Raycast(player.transform.position, Vector3.down, out info, 0.25f))
            {
                Vector3 newPos = player.GetNetworkPosition();
                newPos.y += 0.25f;
                player.MovePosition(newPos);
                player.ServerPosition = newPos;
            }
            return;
        }
    }
}
