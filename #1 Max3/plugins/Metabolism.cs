namespace Oxide.Plugins
{
    [Info("Metabolism", "Orange", "1.0.0")]
    [Description("Made by Orange#0900")]
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
                player.metabolism.hydration.max = 5000;
                player.metabolism.calories.max = 5000;
                player.metabolism.hydration.value = 5000;
                player.metabolism.calories.value = 5000;
            }
        }
    }
}
