namespace Oxide.Plugins
{
    [Info("BlockStashPlacement", "Orange", "1.0.0")]
    public class BlockStashPlacement : RustPlugin
    {
        private void OnEntitySpawned(StashContainer stash)
        {
            var player = BasePlayer.FindByID(stash.OwnerID);
            
            if (player != null)
            {
                player.ChatMessage("<color=#F84949>Ошибка!</color> Нельзя ставить <color=#ff7300>Small Stash</color>");
                player.inventory.GiveItem(ItemManager.CreateByName("stash.small"));
            }
            
            stash.DieInstantly();        
        }
    }
}