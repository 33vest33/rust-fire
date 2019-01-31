// Reference: GameWer.SDK

using System;
using System.Collections.Generic;
using System.Reflection;
using Oxide.Core;
using Oxide.Core.Libraries;
using Oxide.Core.Libraries.Covalence;
using Random = Oxide.Core.Random;

namespace Oxide.Plugins
{
    [Info("GameWerAntiCheat", "TheRyuzaki", "3.3.6")]
    public class GameWerAntiCheat : CovalencePlugin
    {
        private string SettingsHostingKEY { get; } = "";
        private string SettingsOwnerID { get; set; } = "";
        private string SettingsAssits { get; set; } = "";
        private bool SettingsCheckVPN { get; set; } = true;
        private bool SettingsNeedGameWerFromLicens { get; set; } = false;
        private string SettingsLicensKey { get; set; } = "licensKey";

        private List<IPlayer> ListAuthedPlayers { get; } = new List<IPlayer>();
        private Dictionary<ulong, int> ListAppID { get; } = new Dictionary<ulong, int>();
        private Dictionary<ulong, List<Timer>> ListActiveTimersFromPlayers { get; } = new Dictionary<ulong, List<Timer>>();
        private bool HasNetworkStatus { get; set; } = false;

        protected override void LoadDefaultConfig()
        {
            this.Config["NeedGameWerFromLicens"] = false;
            this.Config["OwnerID"] = "";
            this.Config["Assists"] = "";
            if (this.SettingsHostingKEY == string.Empty)
            {
                this.Config["CheckVPN"] = true;
                this.Config["LicensKey"] = "licensKey";
            }

            this.Config.Save();
        }

        private void AnywayLoadConfig()
        {
            this.Config.Load();
            this.SettingsNeedGameWerFromLicens = (bool) this.Config["NeedGameWerFromLicens"];
            this.SettingsLicensKey = (this.SettingsHostingKEY == string.Empty ? (string) this.Config["LicensKey"] : this.SettingsHostingKEY);
            if (this.SettingsHostingKEY == string.Empty)
            {
                this.SettingsCheckVPN = (bool) this.Config["CheckVPN"];
            }

            try
            {
                this.SettingsOwnerID = this.Config["OwnerID"].ToString();
                this.SettingsAssits = this.Config["Assists"].ToString();
            }
            catch
            {
                this.Config["OwnerID"] = "";
                this.Config["Assists"] = "";
                this.SettingsOwnerID = "";
                this.SettingsAssits = "";
                this.Config.Save();
            }   
        }
    
        
#if RUST
        void OnUserApprove(Network.Connection connection)
        {
            int appid = GameWer.SDK.Interface.GetAppID(connection.token);
            ListAppID[connection.userid] = appid;
        }
#endif
#if HURTWORLD
        void OnUserApprove(PlayerSession player)
        {
            int appid = GameWer.SDK.Interface.GetAppID(player.AuthTicketBuffer);
            ListAppID[player.SteamId.m_SteamID] = appid;
        }
#endif
        
        void OnServerInitialized()
        {
            this.AnywayLoadConfig();
            this.timer.Repeat(0.1f, 0, GameWer.SDK.Interface.Cycle);
            GameWer.SDK.Interface.Shutdown();
            GameWer.SDK.Interface.NeedKickPlayer = this.OnNeedKickPlayer;
            GameWer.SDK.Interface.NetworkStatusChange = this.OnNetworkStatusChange;
            GameWer.SDK.Interface.ReceivedMachineID = this.OnReceivedMachineID;
            GameWer.SDK.Interface.Initialization(this.SettingsLicensKey, this.server.Name);
        }

        void Unload()
        {
            GameWer.SDK.Interface.Shutdown(); 
        }
        
        private void OnUserConnected(IPlayer player)
        {
            ulong steamid;
            if (ulong.TryParse(player.Id, out steamid))
            {
                this.RunAuthPlayer(player);

                if (this.ListActiveTimersFromPlayers.ContainsKey(steamid) == false)
                {
                    this.ListActiveTimersFromPlayers.Add(ulong.Parse(player.Id), new List<Timer>());

                    Timer step_one = this.timer.Once(Random.Range(15f, 45f), () => this.OnTickRequestScreenshot(player, false));
                    Timer step_two = this.timer.Once(Random.Range(60f, 120f), () => this.OnTickRequestScreenshot(player, false));
                    Timer step_repeat = this.timer.Once(Random.Range(600f, 900f), () => this.OnTickRequestScreenshot(player, true));
                    
                    this.ListActiveTimersFromPlayers[steamid].Add(step_one);
                    this.ListActiveTimersFromPlayers[steamid].Add(step_two);
                    this.ListActiveTimersFromPlayers[steamid].Add(step_repeat);
                }
            }
        }
        
        private void OnUserDisconnected(IPlayer player)
        {
            ulong steamid;
            if (ulong.TryParse(player.Id, out steamid))
            {
                this.RunUnAuthPlayer(player);
                if (this.ListActiveTimersFromPlayers.ContainsKey(steamid))
                {
                    for (var i = 0; i < this.ListActiveTimersFromPlayers[steamid].Count; i++)
                        this.ListActiveTimersFromPlayers[steamid][i].Destroy();
                    this.ListActiveTimersFromPlayers[steamid].Clear();
                    this.ListActiveTimersFromPlayers.Remove(steamid);
                }
            }
        }
        
        void OnReceivedMachineID(ulong steamid, string machineID) {
            Interface.Oxide.CallHook("OnGameWerResponseMachineID", steamid, machineID);
            // NEED USE  =  GameWer.SDK.Interface.GetMachineID(steamid);
        }
		
		
        void OnNetworkStatusChange(bool status) {
            Interface.Oxide.CallHook("OnGameWerNetworkStatusChanged", status);
            this.HasNetworkStatus = status;
            this.Puts("[GameWer]: NetStatusChange: " + status);
            if(status == true)
            {
				string licensKey = string.Empty;
				licensKey = this.SettingsLicensKey;
                this.webrequest.Enqueue($"http://server.gamewer.ru:61080/?/api/api.SetServerOwner&licensKey={licensKey}&ownerid={this.SettingsOwnerID}&assists={this.SettingsAssits}", "", (code, response) => { }, this, RequestMethod.GET);
                foreach (var player in this.players.Connected)
                {
                    ulong steamid;
                    if (ulong.TryParse(player.Id, out steamid))
                        this.RunAuthPlayer(player);
                }
            }
            else
            {
                List<IPlayer> listAuthedPlayersCache = new List<IPlayer>(this.ListAuthedPlayers);
                for (var i = 0; i < listAuthedPlayersCache.Count; i++)
                    this.RunUnAuthPlayer(listAuthedPlayersCache[i]);
            }
        }
		
        void OnNeedKickPlayer(ulong steamid, string reason) {
            object result_kick = Interface.Oxide.CallHook("CanGameWerKick", steamid, reason);
            if ((result_kick is bool) == false || (bool) result_kick == true)
            {
                if (reason == "anticheat-offline")
                    reason = "Запустите Античит GameWer что бы зайти. Скачать: https://vk.com/allowerd";
                this.Puts($"[GameWer]: Need kick {steamid}, reason: " + reason);
                IPlayer player = this.players.FindPlayerById(steamid.ToString());
                player?.Kick(reason);
            }
        }

        byte[] ParseAuthToken(IPlayer player)
        {
            if (player.Object != null)
            {
#if RUST
            BasePlayer target = (BasePlayer) player.Object;
            return target.net.connection.token;
#endif
#if HURTWORLD
            PlayerSession target = (PlayerSession)player.Object;
            return target.AuthTicketBuffer;
#endif
                this.LogWarning("This plugin no support split License and NoSteam. Please use [NeedGameWerFromLicens = true]");
            }
            else
                this.LogWarning("IPlayer object is null, if any players null - please use [NeedGameWerFromLicens = true]");

            return null;
        }

        void RunAuthPlayer(IPlayer player)
        {
            if (SettingsNeedGameWerFromLicens == false && ListAppID.ContainsKey(ulong.Parse(player.Id)))
            {
                int appid = ListAppID[ulong.Parse(player.Id)];
                if (appid != 480)
                    return;
            }

            if (this.HasNetworkStatus == true && this.ListAuthedPlayers.Contains(player) == false)
            {
                Interface.Oxide.CallHook("OnGameWerAuthPlayer", ulong.Parse(player.Id));
                this.ListAuthedPlayers.Add(player);
                GameWer.SDK.Interface.AuthPlayer(ulong.Parse(player.Id), (SettingsCheckVPN ? player.Address.Split(':')[0] : "0.0.0.0"));
            }
        }

        void RunUnAuthPlayer(IPlayer player)
        {
            if (this.ListAuthedPlayers.Contains(player))
            {
                Interface.Oxide.CallHook("OnGameWerUnAuthPlayer", ulong.Parse(player.Id));
                this.ListAuthedPlayers.Remove(player);
                if (this.HasNetworkStatus == true)
                    GameWer.SDK.Interface.Logout(ulong.Parse(player.Id));
            }
        }

        void OnTickRequestScreenshot(IPlayer player, bool repeat = false)
        {
            if (this.HasNetworkStatus == true && this.ListAuthedPlayers.Contains(player))
                GameWer.SDK.Interface.GetScreenshot(ulong.Parse(player.Id));
            
            if (repeat == true && player.IsConnected)
            {
                if (this.ListActiveTimersFromPlayers.ContainsKey(ulong.Parse(player.Id)))
                    this.ListActiveTimersFromPlayers[ulong.Parse(player.Id)].Clear();
                else
                    this.ListActiveTimersFromPlayers.Add(ulong.Parse(player.Id), new List<Timer>());
                
                Timer step_repeat = this.timer.Once(Random.Range(600f, 900f), () => this.OnTickRequestScreenshot(player, true));
                this.ListActiveTimersFromPlayers[ulong.Parse(player.Id)].Add(step_repeat);
            }
        }
    }
}