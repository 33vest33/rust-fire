namespace Oxide.Plugins
{
    [Info("Metabolism", "Wulf/lukespragg", "2.6.1")]
    public class Metabolism : RustPlugin
    {
        private const string permSpawn = "metabolism.spawn";

        private void Init()
        {
            permission.RegisterPermission(permSpawn, this);
        }

        private void OnPlayerRespawned(BasePlayer player)
        {
            if (permission.UserHasPermission(player.UserIDString, permSpawn))
            {
                player.health = 100f;
                player.metabolism.calories.value = 1000f;
                player.metabolism.hydration.value = 1000f;
            }
        }
    }
}
