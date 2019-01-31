using UnityEngine;

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
                player?.GetComponent<MetabolismAddon>()?.Kill();
                player.gameObject.AddComponent<MetabolismAddon>();
            }
        }
        
        private class MetabolismAddon : MonoBehaviour
        {
            private BasePlayer player;

            private void Awake()
            {
                player = GetComponent<BasePlayer>();
                InvokeRepeating("Refill", 3, 300);
            }

            public void Kill()
            {
                Destroy(this);
            }

            private void Refill()
            {
                if (player == null)
                {
                    Kill();
                    return;
                }
                
                player.metabolism.calories.value = 1000f;
                player.metabolism.hydration.value = 1000f;
            }
        }
    }
}
