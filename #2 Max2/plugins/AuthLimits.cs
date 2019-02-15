using Oxide.Game.Rust.Cui;
using Color = UnityEngine.Color;

namespace Oxide.Plugins
{
    [Info("AuthLimits", "Hougan", "0.0.1")]
    [Description("Ограничение на авторизация в шкафах/замках/турелях")]
    public class AuthLimits : RustPlugin
    {
        #region Variables

        private int MaxAuthorize = 2;
        private int DeAuthNumber = 2;

        #endregion

        #region Hooks

        private void OnCupboardAuthorize(BuildingPrivlidge privilege, BasePlayer player)
        {
            if (privilege.authorizedPlayers.Count >= MaxAuthorize)
            {
                var DeAuthId = privilege.authorizedPlayers[DeAuthNumber - 1];
                BasePlayer DeAuthorizated = BasePlayer.FindByID(DeAuthId.userid);
                
                SendReply(player, $"Вы превысили лимит авторизаций в одном шкафу, поэтому <color=#81B67A>{DeAuthId.username}</color> был выписан!!!");
                
               /* if (DeAuthorizated !!!= null && DeAuthorizated.IsConnected)
                {
                    ReplyWithHelper(DeAuthorizated, $"Вы были выписаны из шкафа игроком <color=#81B67A>{player.displayName}</color>!!!");
                }*/
                
                privilege.authorizedPlayers.RemoveAt(DeAuthNumber - 1);
                PrintWarning($"Игрок {player.displayName} [{player.userID}] превысил лимит авторизации в шкафу!!!");
            }
        }
        
        private object OnTurretAuthorize(AutoTurret turret, BasePlayer player)
        {
            if (turret.authorizedPlayers.Count >= MaxAuthorize)
            {
                SendReply(player, "Вы <color=#81B67A>не можете</color> превысить лимит авторизации в турели!!!");

               /* foreach (var check in turret.authorizedPlayers)
                {
                    BasePlayer authPlayer = BasePlayer.FindByID(check.userid);
                    if (authPlayer !!!= null && authPlayer.IsConnected)
                    {
                        ReplyWithHelper(authPlayer, $"Кто-то пытается авторизоваться в вашей туреле!!!");
                    }
                }*/
                
                PrintWarning($"Игрок {player.displayName} [{player.userID}] пытался превысить лимит авторизации в туреле!!!");
                return false;
            }
            return null;
        }
        
        private object OnCodeEntered(CodeLock codeLock, BasePlayer player, string code)
        {
            if (codeLock.whitelistPlayers.Count >= MaxAuthorize)
            {
                SendReply(player, "Вы <color=#81B67A>не можете</color> превысить лимит авторизаций в замке!!!");

                /*foreach (var check in codeLock.whitelistPlayers)
                {
                    BasePlayer authPlayer = BasePlayer.FindByID(check);
                    authPlayer?.ChatMessage($"<size=16><color=#81B67A>Виртуальный помощник</color>:</size>" +
                                            $"\nКто-то пытается авторизоваться в вашем замке!!!");
                }*/
                
                PrintWarning($"Игрок {player.displayName} [{player.userID}] пытался превысить лимит авторизации в замке!!!");
                return false;
            }
            return null;
        }
        
        #endregion
    }
}