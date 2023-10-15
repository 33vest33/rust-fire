/* fetch(`${window.location.origin}/files/stores/backend/store.info.php`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({
        action: 'servers'
    })
}).then(response=>response.json()).then(data=>{
    .then(data => {
      const progressBar = document.querySelector(`.progress-bar.progress-bar-striped.active.progress-bar-succes`);
      
      progressBar.addEventListener(`mouseover`, function () {
        const servers = data.data.servers;
        const queuedPlayers = servers[0].queued_players !== undefined ? servers[0].queued_players : 0;
        const popupContent = `Онлайн: ${servers[0].players}\nОчередь: ${queuedPlayers}`;
        progressBar.setAttribute(`data-popup-content`);});
      
      
      progressBar.addEventListener(`mouseout`, function() {
        progressBar.removeAttribute(`data-popup-content`);
      });
}
).catch(error=>{
    // Обработка ошибок
    console.error(error);
}
);*/
var curcontent = new Array();
//#region contents
curcontent["rules"] = {
    xhead: 'Правила',
    xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Основная информация</span></p>\
<p><li>Не знание правил не освобождает Вас от ответственности.</li></p>\
<p><li>Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></p>\
<p><li>Вы несете ответственность за все свои аккаунты. Получив бан на одном - Вы получите его и на других. То же самое будет, если на одном из ваших аккаунтах имеется EAC блокировка.</li></p>\
<p><li>Если Вы уже были замечены с читами / макросами на другом проекте и на вас есть доказательства - мы имеем право забанить Вас без проверки.</li></p>\
<p><li>Администрация не компенсирует игровые ценности, утраченные по причине вашей ошибки, серверных лагов, багов игры или контактом с нарушителями.</li></p>\
<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
<p><li>Наказание для игрока зависит от степени нарушения и обстоятельств. Нарушитель может получить предупреждение, временный либо перманентный бан.</li></p>\
<p><li>При серьезном нарушении правил, блокировка выдаётся на всех серверах проекта. За игру сверх разрешенного лимита блокировка выдается только на сервере, где было зафиксировано нарушение.</li></p><br>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><li>Запрещено использовать/хранить/распространять Читы/Макросы или любое другое ПО, позволяющие получить преимущество над другими игроками. Наличие покупки или подписки приравнивается к хранению стороннего ПО.</li></p>\
<p><li>Запрещена игра с читерами.</li></p>\
<p><li>Запрещено использование багов с целью или без цели получения преимущества над другими игроками.</li></p>\
<p><li>Запрещено использование услуг читеров.</li></p><br>\
<p class="MsoNormal"><span>Нарушение лимита игроков в команде</span></li></p>\
<p><li>Запрещено жить больше положенного лимита в одном доме.</li></p>\
<p><li>Запрещено устраивать альянсы и перемирия с соседями, если в сумме Вас больше, указанного в названии сервера, максимума.</li></p>\
<p><li>Чрезмерно частая смена тиммейтов будет считаться за нарушение.</li></p>\
<p><li>Запрещено рейдить/антирейдить или убивать в 1+/2+/3+ и т.д., в зависимости от максимально разрешенного количества игроков в команде, а так-же нельзя в целом каким-либо образом кооперироваться с игроками, если Ваша команда полная.</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
<p><li>Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></p>\
<p><li>Запрещено продавать или делать вид, что Вы продаёте Читы/Макросы.</li></p>\
<p><li>Запрещено продавать игровые ценности за реальную валюту (RMT).</li></p>\
<p><li>Модерация оставляет за собой право выдать мут игроку в чате, если тот нарушает правила чата.</li></p>\<br>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><li>Проверки проходят только через программу «Discord». Каждый игрок на нашем проекте, в обязательном порядке должен иметь эту программу на своём ПК.</li></p>\
<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае Вы будете заблокированы.</li></p>\
<p><li>Так же отказом от проверки будет считаться выход с сервера или предоставление некорректных контактных данных.</li></p>\
<p><li>Игнорирование вызова на проверку увенчается блокировкой.</li></p>\
<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего ПК.</li></p>\
<p><li>Выход с сервера во время вызова на проверку закончится блокировкой.</li></p>\
<p><li>Запрещено чистить ПК перед проверкой.</li></p>\
<p><li>За отказ показывать нужную для проверки информацию или неадекватное поведение — Вы будете заблокированы.</li></p>\
<p><li>Если по итогам проверки игрок получает бан за читы — вся его команда блокируется вместе с ним.</li></p><br>\
<p class="MsoNormal"><span>Причины банов</span></li></p>\
<p><li>Использование читов - Бан навсегда, а также бан тиммейтов на 2 месяца.</li></p>\
<p><li>Использование услуг просвета - Бан навсегда.</li></p>\
<p><li>Отказ от проверки - Бан навсегда.</li></p>\
<p><li>Использование макросов - Бан на 1 год.</li></p>\
<p><li>Игра сверх разрешенного лимита - Бан на 1 месяц.</li></p><br>\
</ul><div class="unban" style="background: #333; border-radius: 10px; padding: 20px;"><p class="MsoNormal2" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокировки</p><span>Не менее, чем через месяц после блокировки можно подать апелляцию, но только в том случае, если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения отдельной группы: <a href="https://vk.com/">vk.com/</a></span></div></div></div>'
};

curcontent["kit-vip"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
    <button class="btn btn-secondary active">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PVP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/548699316.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/191795897.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1035059994.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1660607208.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x5000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2133577942.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x250</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div>	</div>'
};

curcontent["kit-premium"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary active">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PVP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2033918259.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x150</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1660607208.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-699558439.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x10000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x500</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["kit-elite"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary active">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PVP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/456448245.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416621.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x25000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x10000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x250</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x750</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomElite" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x100</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["kit-fire"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary active">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PVP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x300</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/563023711.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/470729623.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x50</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x50</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x33000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x40000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x500</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x1250</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">				<div class="kit-item__quantity">x1000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">				<div class="kit-item__quantity">x1000</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomElite" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x150</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["kit-free"] = {
    xhead: 'Стандартные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
<div class="xbox_custom_kits"><div class="serverheader">Кит - "Строитель" <span>Откат 5М</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-307490664.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1224598842.png"><div class="kit-item__quantity">x1</div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Охотник" - <span>Откат 30м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png"><div class="kit-item__quantity">x36</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png"><div class="kit-item__quantity">x3</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1127699509.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.bone.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1666761111.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-459156023.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-148163128.png"><div class="kit-item__quantity">x1</div></div></div></div></div><div class="serverheader">Кит "Медицина" - <span>Откат 20м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png"><div class="kit-item__quantity">x10</div></div></div></div></div><div class="serverheader">Кит "Еда" - <span>Откат 30м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1043746011.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1734319168.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/93029210.png"><div class="kit-item__quantity">x5</div></div></div></div></div><div class="serverheader">Кит  "Стартовый" - <span>ОТКАТ 12Ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x5000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x500</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-975723312.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1253290621.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-505639592.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/271534758.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/124310981.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-139769801.png"><div class="kit-item__quantity">x1</div></div></div></div></div>  </div></div>'
};

curcontent["kit-fire-pro"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary active">FIRE PRO</button>\
<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PVP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778367295.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x600</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/563023711.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/470729623.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png"><div class="kit-item__quantity">x25</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png"><div class="kit-item__quantity">x25</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x70</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x80</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x60</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x1000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">				<div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">				<div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">				<div class="kit-item__quantity">x800</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomFirePro" - <span>24 часа</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x8</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x300</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "FireProBonus" - <span>48 часов</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/ea48412ea9e6c5c530dca8a147c413e5.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/18792a460ae3f80eff76f080043173e6.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/193190034.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/21/3fccd57c18627b5b016d8a748bbf2415.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-295829489.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://skyplugins.ru/data/resource_icons/0/114.jpg?1579909421">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/523855532.png">				<div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["block"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="xbox_custom_block"><div class="kit-items">'

};

var BlockListArrays = [['shotgun.waterpipe', 'pistol.revolver'], ['pistol.python', 'pistol.semiauto', 'pistol.prototype17', 'pistol.m92', 'shotgun.double', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt'], ['shotgun.pump', 'shotgun.spas12', 'smg.2', 'smg.thompson', 'smg.mp5', 'rifle.semiauto', 'rifle.m39'], ['rifle.ak', 'rifle.ak.ice', 'rifle.lr300', 'rifle.bolt', 'rifle.l96', 'hmlmg', 'metal.facemask', 'metal.plate.torso', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], ['lmg.m249', 'grenade.f1', 'grenade.beancan'], ['explosive.satchel', 'ammo.rifle.explosive', 'multiplegrenadelauncher'], ['rocket.launcher', 'explosive.timed']];

//#endregion
curcontent["Oplata"] = {
    xcon: '\
    	<div class="refill-window__header">\
    		<div class="refill-window__title">Пополнение баланса\
			<div class="svgrep"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24"><g clip-path="url(#clip0)" fill="#fff"><path d="M3.138 24h19.724C24.61 24 26 22.647 26 20.945V6.11c0-1.702-1.39-3.054-3.138-3.054h-2.241v2.618h2.241c.269 0 .448.174.448.436v9.164H2.69V6.109c0-.262.179-.436.448-.436h2.241V3.055H3.138C1.39 3.055 0 4.407 0 6.109v14.836C0 22.648 1.39 24 3.138 24zm20.172-6.11v3.055c0 .262-.179.437-.448.437H3.138c-.269 0-.448-.175-.448-.437v-3.054h20.62z"></path><path d="M11.655 0v8.204l-2.69-2.619-1.882 1.833 4.976 4.844c.538.523 1.39.523 1.882 0l4.976-4.844-1.883-1.833-2.69 2.619V0h-2.689z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="rotate(-180 13 12)" d="M0 0h26v24H0z"></path></clipPath></defs></svg></div>\
		</div>\
    		<button class="refill-window__close">×</button>\
    	</div>\
    	<div class="refill-window__footer"><div class="refill-window__content">\
    		<div class="refill-window__payments">\
    			<ul class="refill-window__payments-list">\
    				<li class="refill-window__payment" onclick="OnClickElement1(this)">\
    					<button class="refill-window__payment-btn" id="element1">\
    						<svg class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 47"> <g clip-path="url(#clip0)"> <path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/> <path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/> <path d="M 24.178 0 C 21.645 0 19.32 0.889 17.48 2.371 C 19.971 4.389 21.576 7.493 21.576 10.993 C 21.576 14.493 19.971 17.597 17.48 19.615 C 19.32 21.097 21.645 21.986 24.178 21.986 C 30.143 21.986 34.973 17.061 34.973 10.979 C 34.973 4.897 30.129 0 24.178 0 Z" fill="#F69F00"/> </g> <g clip-path="url(#clip1)"> <path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/> <path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/> <defs> <clipPath id="clip0"> <path fill="#fff" d="M0 0h35v22H0z"/> </clipPath> <clipPath id="clip1"> <path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/> </clipPath> <linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"> <stop stop-color="#1F5CD7"/> <stop offset="1" stop-color="#02AEFF"/> </linearGradient> </defs> </svg>\
    						<div class="refill-window__payment-label">#1</div>\
    					</button>\
    				</li>\
    				<li class="refill-window__payment" onclick="OnClickElement2(this)">\
    					<button class="refill-window__payment-btn" id="element2">\
    						<svg class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 47"> <g clip-path="url(#clip0)"> <path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/> <path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/> <path d="M 24.178 0 C 21.645 0 19.32 0.889 17.48 2.371 C 19.971 4.389 21.576 7.493 21.576 10.993 C 21.576 14.493 19.971 17.597 17.48 19.615 C 19.32 21.097 21.645 21.986 24.178 21.986 C 30.143 21.986 34.973 17.061 34.973 10.979 C 34.973 4.897 30.129 0 24.178 0 Z" fill="#F69F00"/> </g> <g clip-path="url(#clip1)"> <path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/> <path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/> <defs> <clipPath id="clip0"> <path fill="#fff" d="M0 0h35v22H0z"/> </clipPath> <clipPath id="clip1"> <path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/> </clipPath> <linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"> <stop stop-color="#1F5CD7"/> <stop offset="1" stop-color="#02AEFF"/> </linearGradient> </defs> </svg>\
    						<div class="refill-window__payment-label">#2</div>\
    					</button>\
    				</li>\
    				<li class="refill-window__payment" onclick="OnClickElement3(this)">\
    					<button class="refill-window__payment-btn" id="element3">\
    						<svg class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 47"> <g clip-path="url(#clip0)"> <path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/> <path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/> <path d="M 24.178 0 C 21.645 0 19.32 0.889 17.48 2.371 C 19.971 4.389 21.576 7.493 21.576 10.993 C 21.576 14.493 19.971 17.597 17.48 19.615 C 19.32 21.097 21.645 21.986 24.178 21.986 C 30.143 21.986 34.973 17.061 34.973 10.979 C 34.973 4.897 30.129 0 24.178 0 Z" fill="#F69F00"/> </g> <g clip-path="url(#clip1)"> <path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/> <path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/> <defs> <clipPath id="clip0"> <path fill="#fff" d="M0 0h35v22H0z"/> </clipPath> <clipPath id="clip1"> <path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/> </clipPath> <linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"> <stop stop-color="#1F5CD7"/> <stop offset="1" stop-color="#02AEFF"/> </linearGradient> </defs> </svg>\
    						<div class="refill-window__payment-label">#3</div>\
    					</button>\
    				</li>\
    				<li class="refill-window__payment" onclick="OnClickElement4(this)">\
    					<button class="refill-window__payment-btn" id="element4">\
    						<svg class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 47"> <g clip-path="url(#clip0)"> <path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/> <path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/> <path d="M 24.178 0 C 21.645 0 19.32 0.889 17.48 2.371 C 19.971 4.389 21.576 7.493 21.576 10.993 C 21.576 14.493 19.971 17.597 17.48 19.615 C 19.32 21.097 21.645 21.986 24.178 21.986 C 30.143 21.986 34.973 17.061 34.973 10.979 C 34.973 4.897 30.129 0 24.178 0 Z" fill="#F69F00"/> </g> <g clip-path="url(#clip1)"> <path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/> <path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/> <defs> <clipPath id="clip0"> <path fill="#fff" d="M0 0h35v22H0z"/> </clipPath> <clipPath id="clip1"> <path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/> </clipPath> <linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"> <stop stop-color="#1F5CD7"/> <stop offset="1" stop-color="#02AEFF"/> </linearGradient> </defs> </svg>\
    						<div class="refill-window__payment-label">#4</div>\
    					</button>\
    				</li>\
    			<li class="refill-window__payment" onclick="OnClickElement5(this)">\
    				<button class="refill-window__payment-btn" id="element5">\
    					<svg fill="none" class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"><path d="M206.665 34.254v29.338h-10.476v-20.58h-10.087v20.58h-10.476v-29.34h31.039z" style="fill:#fff"/><path d="M154.11 64.64c9.379 0 16.343-5.75 16.343-14.466 0-8.437-5.138-13.915-13.725-13.915-3.963 0-7.233 1.395-9.696 3.802.588-4.975 4.795-8.607 9.427-8.607 1.069 0 9.117-.017 9.117-.017l4.55-8.71s-10.103.23-14.8.23c-10.732.188-17.981 9.943-17.981 21.79 0 13.804 7.07 19.894 16.766 19.894zm.058-20.667c3.482 0 5.896 2.288 5.896 6.2 0 3.52-2.145 6.422-5.896 6.43-3.588 0-6.002-2.688-6.002-6.37 0-3.913 2.414-6.26 6.002-6.26z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M128.818 53.77s-2.474 1.426-6.17 1.696c-4.247.126-8.032-2.557-8.032-7.324 0-4.65 3.34-7.315 7.926-7.315 2.812 0 6.532 1.949 6.532 1.949s2.722-4.995 4.132-7.493c-2.582-1.957-6.021-3.03-10.021-3.03-10.095 0-17.914 6.582-17.914 15.83 0 9.366 7.349 15.795 17.914 15.6 2.953-.11 7.027-1.146 9.51-2.741z" style="fill:#fff"/><path d="m0 26.12 14.532 25.975v15.844L.017 93.863 0 26.12z" fill="#5B57A2"/><path d="m55.797 42.643 13.617-8.346 27.868-.026-41.485 25.414V42.643z" fill="#D90751"/><path d="m55.72 25.967.077 34.39-14.566-8.95V0l14.49 25.967z" fill="#FAB718"/><path d="m97.282 34.271-27.869.026-13.693-8.33L41.231 0l56.05 34.271z" fill="#ED6F26"/><path d="M55.797 94.007V77.322l-14.566-8.78.008 51.458 14.558-25.993z" fill="#63B22F"/><path d="M69.38 85.737 14.531 52.095 0 26.12l97.223 59.583-27.844.034z" fill="#1487C9"/><path d="m41.24 120 14.556-25.993 13.583-8.27 27.843-.034L41.24 120z" fill="#017F36"/><path d="m.017 93.863 41.333-25.32-13.896-8.526-12.922 7.922L.017 93.863z" fill="#984995"/><path d="M114.619 83.337c-.32.408-.741.716-1.246.924a4.282 4.282 0 0 1-1.632.316 4.63 4.63 0 0 1-1.633-.274 3.623 3.623 0 0 1-1.262-.782 3.539 3.539 0 0 1-.824-1.224 4.173 4.173 0 0 1-.295-1.59c0-.54.093-1.04.286-1.513a3.58 3.58 0 0 1 .79-1.224 3.88 3.88 0 0 1 1.196-.823c.463-.2.968-.308 1.523-.308.598 0 1.153.075 1.658.224.505.15.934.4 1.287.75l-.614 1.04a2.886 2.886 0 0 0-1.027-.6 3.612 3.612 0 0 0-1.12-.174c-.335 0-.655.066-.966.19a2.591 2.591 0 0 0-.825.534 2.438 2.438 0 0 0-.564.832 2.64 2.64 0 0 0-.21 1.08c0 .409.075.775.218 1.09.144.326.337.6.58.833.245.234.53.408.859.525a2.9 2.9 0 0 0 1.044.183c.454 0 .867-.092 1.22-.267a3.05 3.05 0 0 0 .926-.69zm1.733 1.065v-7.405h1.33v5.517l4.325-5.517h1.33v7.406h-1.33v-5.517l-4.325 5.517h-1.33zm15.795-1.065a3.01 3.01 0 0 1-1.245.924 4.291 4.291 0 0 1-1.633.316 4.628 4.628 0 0 1-1.632-.274 3.627 3.627 0 0 1-1.263-.782 3.539 3.539 0 0 1-.824-1.224 4.173 4.173 0 0 1-.295-1.59c0-.54.093-1.04.286-1.513.186-.475.455-.882.79-1.224a3.88 3.88 0 0 1 1.196-.823 3.637 3.637 0 0 1 1.523-.308c.598 0 1.153.075 1.658.224.505.15.934.4 1.288.75l-.615 1.04a2.874 2.874 0 0 0-1.026-.6 3.616 3.616 0 0 0-1.12-.174 2.603 2.603 0 0 0-1.792.724 2.536 2.536 0 0 0-.564.832 2.64 2.64 0 0 0-.21 1.08c0 .409.076.775.219 1.09.143.326.336.6.58.833.244.234.53.408.859.525.328.116.673.183 1.043.183.455 0 .859-.092 1.22-.267a3.05 3.05 0 0 0 .926-.69zm.682-6.34h6.824v1.315h-2.743v6.09h-1.33v-6.09h-2.743v-1.315z" style="fill:#fff"/><path d="M145.864 84.328c.505-.158.934-.4 1.304-.732l-.404-1.032c-.244.217-.572.4-.967.55-.396.15-.842.224-1.33.224-.732 0-1.338-.191-1.818-.582-.48-.392-.74-.94-.8-1.64h5.757a4 4 0 0 0 .084-.89 3.35 3.35 0 0 0-.278-1.381 3.277 3.277 0 0 0-.74-1.074 3.295 3.295 0 0 0-1.111-.69 3.692 3.692 0 0 0-1.355-.25c-.623 0-1.17.108-1.65.308a3.637 3.637 0 0 0-1.203.824 3.477 3.477 0 0 0-.748 1.223 4.272 4.272 0 0 0-.261 1.514c0 .583.1 1.115.286 1.59a3.5 3.5 0 0 0 .808 1.223c.345.34.765.599 1.262.782a4.772 4.772 0 0 0 1.658.274 5.04 5.04 0 0 0 1.506-.24zm-3.366-5.7c.412-.374.959-.557 1.649-.557.648 0 1.17.175 1.549.525.379.349.58.832.614 1.447h-4.544a2.26 2.26 0 0 1 .732-1.414z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M149.499 76.997h1.212l2.878 3.67 2.726-3.67h1.178v7.406h-1.33v-5.4l-2.591 3.436h-.051l-2.692-3.437v5.4h-1.33z" style="fill:#fff"/><path d="M161.11 77.022a4.187 4.187 0 0 0-1.143.49l.353 1.05c.303-.15.606-.275.909-.383.303-.11.69-.16 1.153-.16.37 0 .665.06.892.176.227.108.395.275.513.475.118.2.194.449.236.74.042.29.059.607.059.949a2.28 2.28 0 0 0-.91-.375 5.229 5.229 0 0 0-.958-.1c-.396 0-.766.059-1.12.158-.353.1-.656.25-.9.45a2.14 2.14 0 0 0-.59.74 2.3 2.3 0 0 0-.218 1.007c0 .724.21 1.29.63 1.69.422.399.977.598 1.667.598.623 0 1.12-.108 1.498-.324.379-.217.682-.466.9-.75v.958h1.246v-4.543c0-.966-.21-1.714-.64-2.24-.42-.523-1.17-.79-2.23-.79-.471 0-.917.067-1.346.184zm2.224 6c-.303.216-.7.315-1.187.315-.43 0-.766-.108-1.001-.316-.236-.216-.354-.5-.354-.85 0-.206.042-.381.135-.54a1.23 1.23 0 0 1 .362-.382 1.6 1.6 0 0 1 .513-.225c.194-.05.387-.075.589-.075.657 0 1.22.158 1.683.49v.94a3.824 3.824 0 0 1-.74.642zm13.733-8.63c.269-.124.52-.332.757-.64l-.724-1.04c-.185.25-.395.424-.631.516a4.007 4.007 0 0 1-.774.216l-.252.045c-.22.038-.454.08-.707.122a5.224 5.224 0 0 0-1.178.366c-.598.258-1.077.607-1.44 1.048-.361.44-.647.94-.841 1.49a7.793 7.793 0 0 0-.395 1.722c-.068.6-.101 1.173-.101 1.722 0 .708.092 1.348.277 1.922.186.575.446 1.057.79 1.448.346.4.759.7 1.247.916.488.216 1.035.324 1.649.324.564 0 1.086-.108 1.557-.308a3.758 3.758 0 0 0 1.212-.823c.336-.342.606-.75.79-1.207a3.74 3.74 0 0 0 .287-1.465c0-.557-.084-1.064-.244-1.514a3.271 3.271 0 0 0-.69-1.156 3.072 3.072 0 0 0-1.103-.75 3.827 3.827 0 0 0-1.447-.266c-.32 0-.631.042-.934.125a3.604 3.604 0 0 0-.842.358 3.2 3.2 0 0 0-.698.54c-.202.209-.37.442-.488.708h-.034a8.07 8.07 0 0 1 .143-1.048c.076-.358.185-.7.329-1.024.143-.324.328-.616.555-.882a2.52 2.52 0 0 1 .875-.624 4.646 4.646 0 0 1 1.153-.374l.264-.048c.263-.048.514-.094.754-.144.32-.066.614-.15.884-.274zm-4.68 7.115a4.146 4.146 0 0 1-.184-1.298 2.09 2.09 0 0 1 .303-.707 2.48 2.48 0 0 1 .547-.6 2.773 2.773 0 0 1 1.733-.59c.783 0 1.372.24 1.784.716.413.482.615 1.08.615 1.805 0 .358-.068.683-.185.982a2.36 2.36 0 0 1-1.28 1.323 2.45 2.45 0 0 1-1.001.2c-.37 0-.707-.075-1.018-.225a2.34 2.34 0 0 1-.8-.624 3.129 3.129 0 0 1-.513-.982zm16.402-4.51h-1.33v7.406h1.33zm-8.281 0h1.33v2.222h1.229c.58 0 1.05.075 1.43.216.379.142.682.333.909.566.227.233.387.508.48.815.092.308.143.624.143.957 0 .333-.051.65-.16.966-.101.316-.278.59-.514.84-.235.25-.555.45-.96.6-.403.149-.891.232-1.48.232H180.5v-7.414zm1.33 3.46v2.714h.968c.665 0 1.136-.116 1.405-.35.27-.233.404-.565.404-1.006 0-.45-.143-.79-.412-1.024-.278-.233-.741-.35-1.38-.35h-.985z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M197.583 83.337c-.32.408-.741.716-1.246.924a4.286 4.286 0 0 1-1.632.316 4.63 4.63 0 0 1-1.633-.274 3.613 3.613 0 0 1-1.262-.782 3.555 3.555 0 0 1-.825-1.224 4.192 4.192 0 0 1-.294-1.59c0-.54.092-1.04.286-1.513a3.58 3.58 0 0 1 .79-1.224c.338-.35.74-.615 1.196-.823a3.634 3.634 0 0 1 1.523-.308c.597 0 1.153.075 1.658.224.505.15.934.4 1.287.75l-.614 1.04a2.886 2.886 0 0 0-1.027-.6 3.612 3.612 0 0 0-1.12-.174c-.335 0-.655.066-.967.19a2.587 2.587 0 0 0-.824.534 2.52 2.52 0 0 0-.564.832 2.64 2.64 0 0 0-.21 1.08c0 .409.075.775.218 1.09.143.326.337.6.58.833.245.234.53.408.859.525.329.116.674.183 1.044.183a2.76 2.76 0 0 0 1.22-.267 3.05 3.05 0 0 0 .926-.69zm.68-6.34h6.826v1.315h-2.744v6.09h-1.33v-6.09h-2.742v-1.315z" style="fill:#fff"/><path d="M207.866 76.998h-1.33v10.7h1.33v-3.636c.269.175.589.3.959.383.37.083.757.124 1.153.124.589 0 1.119-.108 1.599-.307a3.825 3.825 0 0 0 1.228-.84 3.65 3.65 0 0 0 .79-1.266c.186-.49.279-1.015.279-1.572 0-.55-.084-1.057-.244-1.515a3.524 3.524 0 0 0-.69-1.181 2.996 2.996 0 0 0-1.086-.774 3.49 3.49 0 0 0-1.44-.283c-.52 0-1.008.1-1.471.3-.463.2-.825.44-1.077.74zm.926 1.373c.379-.2.79-.3 1.237-.3.387 0 .732.058 1.044.183.303.125.555.3.766.533.21.233.37.5.47.815.11.316.16.658.16 1.032 0 .4-.067.757-.184 1.09a2.4 2.4 0 0 1-.514.849 2.36 2.36 0 0 1-.816.557 2.685 2.685 0 0 1-1.086.208c-.361 0-.698-.041-1.018-.124a3.328 3.328 0 0 1-.984-.45v-3.67c.235-.282.547-.523.925-.723zm15.28-1.374h-1.33v7.406h1.33zm-8.288 0h1.33v2.222h1.228c.58 0 1.052.075 1.43.216.38.142.683.333.91.566.227.233.387.508.479.815.093.308.143.624.143.957 0 .333-.05.65-.16.966-.1.316-.277.59-.513.84-.235.25-.555.45-.96.6-.403.149-.891.232-1.48.232h-2.415v-7.414zm1.339 3.46v2.714h.968c.664 0 1.136-.116 1.405-.35.269-.233.404-.565.404-1.006 0-.45-.143-.79-.412-1.024-.278-.233-.741-.35-1.38-.35h-.985z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="m230.452 80.567 2.844 3.836h-1.632l-2.197-2.996-2.23 2.996h-1.548l2.827-3.77-2.66-3.636h1.634l2.028 2.796 2.06-2.796h1.55zM113.635 93.556h-4.081v6.174h-1.33v-7.405h6.74v7.405h-1.33zm8.877.083h-2.625l-.085 1.248c-.092 1.057-.218 1.906-.395 2.554-.177.65-.396 1.149-.648 1.498-.252.35-.547.59-.884.708a3.06 3.06 0 0 1-1.085.183l-.101-1.282a1.08 1.08 0 0 0 .496-.108c.186-.083.37-.266.547-.54.177-.284.337-.683.48-1.2.143-.523.236-1.205.286-2.063l.135-2.305h5.209v7.406h-1.33v-6.1z" style="fill:#fff"/><path d="M127.427 92.342c-.43.116-.817.282-1.145.49l.354 1.049c.303-.15.606-.275.908-.383.303-.108.69-.158 1.153-.158.37 0 .665.058.892.174.228.109.396.275.514.475.117.2.193.45.235.74.042.292.059.608.059.949a2.277 2.277 0 0 0-.91-.374 5.22 5.22 0 0 0-.958-.1c-.395 0-.766.058-1.12.158-.353.1-.656.25-.9.45a2.14 2.14 0 0 0-.59.74 2.3 2.3 0 0 0-.217 1.007c0 .723.21 1.29.63 1.689.42.399.977.599 1.667.599.623 0 1.119-.108 1.498-.325.378-.216.68-.466.9-.75v.958h1.246v-4.543c0-.965-.211-1.714-.64-2.238-.421-.525-1.17-.79-2.23-.79a5.1 5.1 0 0 0-1.346.182zm2.23 5.998c-.302.217-.698.317-1.186.317-.438 0-.766-.108-1.001-.317-.236-.216-.354-.5-.354-.848 0-.208.042-.383.135-.541.092-.158.219-.283.362-.383.143-.1.319-.175.513-.225a2.33 2.33 0 0 1 .589-.074c.656 0 1.22.158 1.683.49v.94a3.83 3.83 0 0 1-.741.64z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M132.946 92.325h6.825v1.314h-2.744v6.09h-1.33v-6.09h-2.742v-1.314z" style="fill:#fff"/><path d="M145.982 99.655c.505-.158.934-.4 1.304-.732l-.404-1.032c-.244.217-.572.4-.968.55-.395.15-.841.224-1.33.224-.731 0-1.337-.191-1.817-.582-.48-.391-.74-.94-.8-1.64h5.757c.058-.257.084-.55.084-.89 0-.507-.093-.965-.278-1.381a3.264 3.264 0 0 0-.741-1.073 3.28 3.28 0 0 0-1.11-.691 3.696 3.696 0 0 0-1.355-.25c-.623 0-1.17.108-1.65.308a3.618 3.618 0 0 0-1.203.824 3.494 3.494 0 0 0-.75 1.223 4.294 4.294 0 0 0-.26 1.514c0 .583.1 1.115.286 1.59.186.474.463.882.808 1.223a3.47 3.47 0 0 0 1.263.782 4.766 4.766 0 0 0 1.657.275c.497 0 1.002-.084 1.507-.242zm-3.374-5.708c.412-.374.959-.557 1.649-.557.657 0 1.17.183 1.549.524.378.35.58.832.614 1.448h-4.544a2.26 2.26 0 0 1 .732-1.415zm5.848-1.622h1.683l2.566 3.57-2.743 3.835h-1.632l2.877-3.836-2.751-3.57zm4.577 0h1.33v7.405h-1.33zm6.084 7.405-2.928-3.836 2.735-3.57h-1.65l-2.583 3.57 2.777 3.836zm6.076-.075c.505-.158.934-.4 1.304-.732l-.404-1.032c-.244.217-.572.4-.967.55-.396.15-.842.224-1.33.224-.732 0-1.338-.191-1.818-.582-.48-.391-.74-.94-.8-1.64h5.757c.059-.257.084-.55.084-.89 0-.507-.092-.965-.278-1.381a3.276 3.276 0 0 0-.74-1.073 3.284 3.284 0 0 0-1.111-.691 3.692 3.692 0 0 0-1.355-.25c-.622 0-1.17.108-1.65.308a3.624 3.624 0 0 0-1.202.824 3.465 3.465 0 0 0-.75 1.223 4.272 4.272 0 0 0-.26 1.514c0 .583.1 1.115.286 1.59.185.474.463.882.808 1.223.345.34.765.599 1.262.782a4.772 4.772 0 0 0 1.658.275 5.04 5.04 0 0 0 1.506-.242zm-3.374-5.708c.413-.374.96-.557 1.65-.557.648 0 1.169.183 1.548.524.379.35.58.832.614 1.448h-4.544a2.26 2.26 0 0 1 .732-1.415zm10.595-4.11c-.783 0-1.212-.433-1.28-1.298h-1.253c0 .332.059.632.168.915.11.283.27.524.48.724.21.2.48.358.79.482.312.125.674.183 1.086.183a2.64 2.64 0 0 0 1.019-.183c.303-.116.555-.282.774-.482a2.1 2.1 0 0 0 .496-.724c.118-.283.177-.583.177-.915h-1.245c-.06.865-.472 1.298-1.212 1.298zm-3.594 2.487v7.406h1.33l4.325-5.517v5.517h1.33v-7.406h-1.33l-4.325 5.517v-5.517z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/></svg>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement6(this)">\
    				<button class="refill-window__payment-btn" id="element6">\
    					<svg class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.7 108.1"><path d="M196.5 22.8v50.5c0 .8-.6 1.4-1.4 1.4h-10.3c-.8 0-1.4-.6-1.4-1.4V22.8c0-.8.6-1.4 1.4-1.4h10.3c.8 0 1.4.6 1.4 1.4zm80.4-1.4h-11.5c-.6 0-1.1.4-1.3 1L255 52.3l-10-29.9c-.2-.6-.7-.9-1.3-.9h-8.1c-.6 0-1.1.4-1.3.9l-10 29.9-9.3-29.9c-.2-.6-.7-1-1.3-1h-11.5c-.4 0-.9.2-1.1.6-.3.4-.3.8-.2 1.2l17 50.6c.2.6.7.9 1.3.9h9.2c.6 0 1.1-.4 1.3-.9l9.9-29.5 9.9 29.5c.2.6.7.9 1.3.9h9.2c.6 0 1.1-.4 1.3-.9l17-50.6c.1-.4.1-.9-.2-1.2-.3-.4-.7-.6-1.2-.6zm17.4 0H284c-.8 0-1.4.6-1.4 1.4v50.5c0 .8.6 1.4 1.4 1.4h10.3c.8 0 1.4-.6 1.4-1.4V22.8c0-.8-.7-1.4-1.4-1.4zM177.5 73c.6.7.1 1.7-.8 1.7H164c-.5 0-1-.2-1.3-.6l-2.1-2.6c-4.4 2.8-9.6 4.5-15.1 4.5-15.4 0-27.9-12.5-27.9-27.9s12.5-27.9 27.9-27.9c15.4 0 27.9 12.5 27.9 27.9 0 5.5-1.6 10.7-4.4 15.1l8.5 9.8zm-25.1-11.3l-5.5-6.7c-.6-.7-.1-1.8.8-1.8h11.6c.6-1.6.9-3.4.9-5.2 0-8.3-6.2-15.5-14.7-15.5s-14.7 7.2-14.7 15.5 6.2 15.4 14.7 15.4c2.5.1 4.8-.6 6.9-1.7zm-66.6 11c.3 2.1-.4 3-1 3-.7 0-1.6-.9-2.7-2.5-1.1-1.7-1.5-3.6-.9-4.5.3-.6 1.1-.9 2-.6 1.7.6 2.4 3.3 2.6 4.6zm-9.9 4.6c2.1 1.8 2.8 4 1.7 5.5-.6.8-1.6 1.3-2.9 1.3-1.2 0-2.4-.4-3.3-1.2-1.9-1.7-2.5-4.5-1.2-6 .5-.6 1.3-.9 2.3-.9 1.1-.1 2.3.4 3.4 1.3zm-3.6 17.4c9.2 0 19.2 3.2 30.3 13 1.1 1 2.6-.2 1.6-1.5-10.9-13.7-20.9-16.3-30.9-18.5-12.3-2.7-18.6-9.6-23-17.2-.9-1.5-1.3-1.2-1.3.7-.1 2.4.1 5.5.6 8.6h-1.5c-17.5 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8c17.5 0 31.8 14.2 31.8 31.8 0 1.2-.1 2.5-.2 3.7-2.3-.4-6.9-.5-10.1-.2-1.2.1-1 .7-.1.8 10.5 1.9 17.7 8.4 19.4 20.2 0 .3.4.4.5.1 4.3-7.2 6.8-15.6 6.8-24.7C96.1 21.5 74.6 0 48.1 0 21.5 0 0 21.5 0 48.1s21.5 48.1 48.1 48.1c7-.1 14-1.5 24.2-1.5z" fill="#ff8c00"/></svg>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement7(this)">\
    				<button class="refill-window__payment-btn" id="element7" >\
    					<svg class="refill-window__payment-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 27"><path fill="#8b3ffd" d="M24.523 0c-7.52 0-13.5 6.066-13.5 13.5 0 7.519 6.066 13.5 13.5 13.5 7.433 0 13.5-6.067 13.5-13.5.085-7.434-6.067-13.5-13.5-13.5zm0 18.541c-2.735 0-5.042-2.307-5.042-5.041 0-2.734 2.307-5.041 5.041-5.041 2.735 0 5.042 2.307 5.042 5.041 0 2.734-2.222 5.041-5.041 5.041zM11.022 3.93v19.652h-4.87L0 3.93h11.022z"/><path fill="#fff" d="M124.917 7.434l-2.991 7.348c-.085.086-.085.257-.085.342l-.086.171-.085-.17c0-.086-.086-.257-.086-.343l-2.99-7.348h-3.845l5.041 12.56-2.136 4.785h3.845l7.092-17.345h-3.674zm-28.367.683c-.683-.513-1.537-.854-2.563-.94-1.709-.17-3.332.427-4.443 1.538V7.348h-3.503v12.56h3.503V13.33c0-1.453.257-1.88.513-2.222.427-.683 1.196-1.025 2.136-1.025.94 0 1.794.427 2.221 1.111.257.513.342 1.196.342 1.538v7.177h3.503v-7.604c0-1.966-.598-3.333-1.709-4.187zM79.376 7.52c-1.709-.598-3.588-.513-5.297.256-1.11.513-2.136 1.367-2.734 2.478-.598.94-.855 2.136-.855 3.418 0 1.281.257 2.477.855 3.417s1.367 1.795 2.392 2.307c1.025.513 2.222.855 3.332.855.598 0 1.197-.086 1.795-.257.512-.17 1.025-.341 1.538-.598 1.025-.598 1.88-1.367 2.392-2.307.598-.94.855-2.136.855-3.417.085-2.82-1.538-5.212-4.273-6.152zm1.026 6.322c-.086 1.111-.428 2.051-1.111 2.65-.513.426-1.282.683-2.222.768-.94 0-1.623-.256-2.221-.769-.684-.598-1.025-1.538-1.11-2.649-.086-1.281.426-2.306 1.366-2.99.513-.342 1.196-.598 1.88-.598.769 0 1.367.256 1.965.598 1.025.598 1.538 1.709 1.453 2.99zM66.474 8.117c-.683-.513-1.538-.854-2.563-.94h-.598c-1.367 0-2.563.598-3.589 1.795l-.17.256h-.342a3.641 3.641 0 00-.94-1.025c-.684-.513-1.538-.855-2.564-.94-1.623-.171-2.905.341-4.015 1.538V7.519H48.19v12.56h3.503V13.33c0-1.368.17-1.71.427-2.137.427-.684 1.196-1.11 2.05-1.025.855 0 1.624.427 2.051 1.11.342.513.342 1.111.342 1.71v7.006h3.503v-6.75c0-1.282.17-1.71.427-2.136.427-.684 1.197-1.026 2.05-1.026.855 0 1.539.427 1.966 1.111.256.427.342.94.342 1.282v7.433h3.503v-7.69c0-.683-.085-1.367-.256-1.965-.342-.854-.855-1.623-1.624-2.136zm44.943 8.033c-.513.512-1.709 1.452-3.332 1.537-1.367.086-2.393-.341-3.162-1.11-.341-.342-.598-.855-.769-1.368h9.655v-.085c.086-.513.171-.94.171-1.453 0-.427-.085-1.025-.256-1.794-.427-1.452-1.282-2.563-2.392-3.418-1.282-.94-2.478-1.196-2.82-1.196-2.478-.427-5.298.684-6.75 2.99-1.025 1.624-.94 3.248-.94 3.76 0 .598.085 2.478 1.623 4.187 1.795 1.965 4.273 2.05 5.042 2.136 3.417.086 5.724-2.05 6.237-2.478l-2.307-1.709zm-5.981-5.298c.513-.342 1.111-.598 1.88-.598.769 0 1.367.256 1.965.598.513.427.94.94 1.196 1.538h-6.152c.086-.598.513-1.196 1.111-1.538z"/></svg>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement8(this)">\
    				<button class="refill-window__payment-btn" id="element8">\
    					<svg class="refill-window__payment-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 306.5 64" xml:space="preserve"><style>.st1{fill:#fff}</style><path d="M352.6 357.3c-4.3 17.1-21.6 27.6-38.8 23.3-17.1-4.3-27.6-21.6-23.3-38.8 4.3-17.1 21.6-27.6 38.8-23.3 17.2 4.2 27.6 21.6 23.3 38.8z" fill="#f7931a" transform="translate(-289.6074 -317.5047)"/><path class="st1" d="M335.7 345c.6-4.3-2.6-6.5-7-8.1l1.4-5.8-3.5-.9-1.4 5.6c-.9-.2-1.9-.4-2.8-.7l1.4-5.7-3.5-.9-1.4 5.8c-.8-.2-1.5-.3-2.2-.5l-4.8-1.2-.9 3.8s2.6.6 2.5.6c1.4.4 1.7 1.3 1.6 2l-1.6 6.6c.1 0 .2.1.4.1-.1 0-.2-.1-.4-.1l-2.3 9.2c-.2.4-.6 1.1-1.6.8 0 .1-2.6-.6-2.6-.6l-1.7 4 4.6 1.1c.9.2 1.7.4 2.5.6l-1.5 5.8 3.5.9 1.4-5.8c1 .3 1.9.5 2.8.7l-1.4 5.7 3.5.9 1.5-5.8c6 1.1 10.5.7 12.4-4.7 1.5-4.4-.1-6.9-3.2-8.5 2.1-.3 3.8-1.8 4.3-4.9zm-8 11.2c-1.1 4.4-8.4 2-10.8 1.4l1.9-7.7c2.4.6 10 1.8 8.9 6.3zm1.1-11.3c-1 4-7.1 2-9.1 1.5l1.7-7c2 .4 8.4 1.3 7.4 5.5zM383.4 336.9c2.6 0 4.8.5 6.7 1.4 1.9.9 3.5 2.2 4.7 3.7 1.2 1.6 2.2 3.4 2.8 5.5.6 2.1.9 4.4.9 6.8 0 3.7-.7 7.3-2.1 10.6-1.4 3.3-3.3 6.2-5.6 8.7-2.4 2.5-5.2 4.4-8.4 5.8-3.2 1.4-6.7 2.1-10.5 2.1h-2.6c-1.3 0-2.6-.1-4.2-.4-1.6-.2-3.2-.5-5-1-1.8-.4-3.4-1-5-1.8l14-58.9 12.5-1.9-5 20.9c1.1-.5 2.2-.9 3.2-1.1 1.2-.3 2.3-.4 3.6-.4zm-10.5 34.6c1.9 0 3.7-.5 5.3-1.4 1.7-.9 3.1-2.1 4.3-3.7 1.2-1.5 2.2-3.3 2.9-5.2s1.1-4 1.1-6.1c0-2.6-.4-4.6-1.3-6.1s-2.5-2.2-4.8-2.2c-.8 0-1.7.1-3 .4-1.2.3-2.3.8-3.3 1.7l-5.3 22.2c.3.1.6.1.9.2.2.1.5.1.8.1h1c.4 0 .8.1 1.4.1zM411.5 380.4h-12l10.1-42.6h12.1l-10.2 42.6zm5.8-47.8c-1.7 0-3.2-.5-4.5-1.5-1.4-1-2-2.5-2-4.6 0-1.1.2-2.2.7-3.2.5-1 1.1-1.9 1.8-2.6.8-.7 1.6-1.3 2.6-1.7 1-.4 2.1-.6 3.2-.6 1.7 0 3.2.5 4.5 1.5 1.3 1 2 2.5 2 4.6 0 1.1-.2 2.2-.7 3.2-.5 1-1.1 1.9-1.8 2.6-.8.7-1.6 1.3-2.6 1.7-1 .4-2.1.6-3.2.6zM432.2 327.2l12.6-1.9-3.1 12.6h13.4l-2.4 9.9h-13.4l-3.6 14.9c-.3 1.2-.5 2.4-.6 3.5-.1 1.1.1 2 .4 2.8.3.8.9 1.4 1.7 1.8.8.4 2 .7 3.6.7 1.3 0 2.6-.1 3.8-.4 1.2-.2 2.4-.6 3.7-1l.9 9.2c-1.6.6-3.4 1.1-5.3 1.5-1.9.4-4.1.6-6.7.6-3.7 0-6.6-.6-8.7-1.7-2.1-1.1-3.5-2.6-4.4-4.5-.9-1.9-1.2-4.1-1.1-6.6.1-2.5.5-5.1 1.1-7.9l8.1-33.5zM454.6 363.4c0-3.7.6-7.1 1.8-10.4 1.2-3.2 2.9-6.1 5.1-8.5 2.2-2.4 4.9-4.3 8.1-5.7 3.1-1.4 6.7-2.1 10.6-2.1 2.4 0 4.6.2 6.5.7 1.9.5 3.7 1.1 5.2 1.8l-4.1 9.4c-1.1-.4-2.2-.8-3.4-1.2-1.2-.4-2.6-.5-4.3-.5-4 0-7.2 1.4-9.5 4.1-2.3 2.8-3.5 6.5-3.5 11.1 0 2.8.6 5 1.8 6.7 1.2 1.7 3.4 2.5 6.6 2.5 1.6 0 3.1-.2 4.5-.5 1.5-.3 2.8-.7 3.9-1.2l.9 9.6c-1.5.6-3.2 1.1-5 1.6-1.8.4-4 .7-6.6.7-3.3 0-6.2-.5-8.5-1.5s-4.2-2.3-5.7-3.9c-1.5-1.7-2.6-3.6-3.3-5.8-.8-2.2-1.1-4.5-1.1-6.9zM507.8 381.5c-2.9 0-5.3-.4-7.5-1.3-2.1-.9-3.8-2.1-5.2-3.6-1.4-1.6-2.4-3.4-3.1-5.5-.7-2.1-1-4.5-1-7.1 0-3.2.5-6.5 1.6-9.7 1-3.2 2.6-6.2 4.7-8.7 2-2.6 4.6-4.7 7.5-6.4 3-1.6 6.4-2.5 10.2-2.5 2.8 0 5.3.4 7.4 1.3 2.1.9 3.9 2.1 5.3 3.6 1.4 1.6 2.4 3.4 3.1 5.5.7 2.1 1.1 4.5 1.1 7.1 0 3.2-.5 6.5-1.5 9.7-1 3.2-2.5 6.1-4.5 8.7-2 2.6-4.5 4.7-7.5 6.4-3.2 1.7-6.6 2.5-10.6 2.5zm6-34.7c-1.8 0-3.3.5-4.7 1.5-1.4 1-2.5 2.3-3.4 3.9-.9 1.6-1.6 3.3-2.1 5.1-.5 1.9-.7 3.6-.7 5.3 0 2.7.4 4.8 1.3 6.3s2.4 2.3 4.7 2.3c1.8 0 3.3-.5 4.7-1.5 1.3-1 2.5-2.3 3.4-3.9.9-1.6 1.6-3.3 2.1-5.1.5-1.9.7-3.6.7-5.3 0-2.7-.4-4.8-1.3-6.3s-2.4-2.3-4.7-2.3zM544.8 380.4h-12l10.1-42.6H555l-10.2 42.6zm5.9-47.8c-1.7 0-3.2-.5-4.5-1.5-1.3-1-2-2.5-2-4.6 0-1.1.2-2.2.7-3.2.5-1 1.1-1.9 1.8-2.6.8-.7 1.6-1.3 2.6-1.7 1-.4 2.1-.6 3.2-.6 1.7 0 3.2.5 4.5 1.5 1.3 1 2 2.5 2 4.6 0 1.1-.2 2.2-.7 3.2s-1.1 1.9-1.8 2.6c-.8.7-1.6 1.3-2.6 1.7-1 .4-2.1.6-3.2.6zM563.7 339.7c.9-.3 1.9-.6 3-.9 1.1-.3 2.3-.7 3.7-1 1.4-.3 2.9-.5 4.6-.7 1.7-.2 3.6-.3 5.8-.3 6.3 0 10.7 1.8 13.1 5.5 2.4 3.7 2.8 8.7 1.3 15.1l-5.5 23h-12.1l5.3-22.5c.3-1.4.6-2.8.8-4.1.2-1.3.2-2.5 0-3.5s-.7-1.8-1.5-2.4c-.8-.6-2-.9-3.6-.9s-3.2.2-4.8.5l-7.9 33h-12.1l9.9-40.8z" transform="translate(-289.6074 -317.5047)"/></svg>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement9(this)">\
    				<button class="refill-window__payment-btn" id="element9">\
    					<svg class="refill-window__payment-icon" width="70" height="18" viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8_3245)"><path d="M19.8463 10.0917C19.8453 10.1526 19.8202 10.2107 19.7764 10.2532C19.7327 10.2957 19.6739 10.3192 19.613 10.3185H15.3157C15.4259 11.3815 16.2231 12.3537 17.3509 12.3537C18.1222 12.3537 18.6926 12.062 19.1204 11.4463C19.1403 11.4139 19.1678 11.387 19.2006 11.3678C19.2334 11.3486 19.2704 11.3377 19.3083 11.3361C19.3366 11.3353 19.3648 11.3403 19.3911 11.3508C19.4174 11.3612 19.4413 11.3769 19.4614 11.397C19.4814 11.417 19.4971 11.4409 19.5076 11.4672C19.518 11.4935 19.523 11.5217 19.5222 11.55C19.5224 11.5891 19.5111 11.6274 19.4898 11.6602C19.0556 12.412 18.1935 12.7815 17.3509 12.7815C15.9056 12.7815 14.8685 11.4852 14.8685 10.1046C14.8685 8.72407 15.8991 7.42778 17.3509 7.42778C18.8028 7.42778 19.8398 8.71111 19.8463 10.0917ZM19.3861 9.89074C19.2954 8.82778 18.4787 7.85556 17.3509 7.85556C16.2231 7.85556 15.4259 8.82778 15.3157 9.89074H19.3861Z" fill="white"/><path d="M25.0704 7.53148C25.1266 7.53311 25.18 7.55617 25.2198 7.59593C25.2596 7.6357 25.2826 7.68916 25.2843 7.74537C25.2851 7.77368 25.2801 7.80185 25.2696 7.82817C25.2592 7.85448 25.2434 7.87838 25.2234 7.89841C25.2034 7.91843 25.1795 7.93416 25.1532 7.94462C25.1268 7.95508 25.0987 7.96007 25.0704 7.95926H23.9167V12.4898C23.9162 12.5464 23.8935 12.6005 23.8535 12.6405C23.8135 12.6805 23.7593 12.7032 23.7028 12.7037C23.6466 12.7021 23.5931 12.679 23.5533 12.6393C23.5136 12.5995 23.4905 12.546 23.4889 12.4898V7.95926H22.3806C22.3522 7.96007 22.3241 7.95508 22.2978 7.94462C22.2714 7.93416 22.2475 7.91843 22.2275 7.89841C22.2075 7.87838 22.1918 7.85448 22.1813 7.82817C22.1708 7.80185 22.1659 7.77368 22.1667 7.74537C22.1672 7.6888 22.1899 7.63469 22.2299 7.59469C22.2699 7.55469 22.324 7.53199 22.3806 7.53148H23.4889V5.8787C23.489 5.82394 23.5086 5.77101 23.5443 5.72942C23.5799 5.68784 23.6292 5.66034 23.6833 5.65185C23.7136 5.64784 23.7443 5.6504 23.7735 5.65936C23.8027 5.66832 23.8295 5.68347 23.8523 5.70378C23.8751 5.72409 23.8932 5.74907 23.9054 5.77702C23.9176 5.80497 23.9237 5.83524 23.9231 5.86574V7.53148H25.0704Z" fill="white"/><path d="M32.1028 9.72222V12.4639C32.1011 12.5201 32.0781 12.5736 32.0383 12.6133C31.9986 12.6531 31.9451 12.6761 31.8889 12.6778C31.8606 12.6786 31.8324 12.6736 31.8061 12.6631C31.7798 12.6527 31.7559 12.6369 31.7359 12.6169C31.7158 12.5969 31.7001 12.573 31.6896 12.5467C31.6792 12.5204 31.6742 12.4922 31.675 12.4639V9.72222C31.675 8.79537 31.15 7.875 30.1194 7.875C28.7972 7.875 28.2269 9.0287 28.3046 10.2148C28.3046 10.2472 28.3176 10.3833 28.3176 10.4028V12.4574C28.3175 12.5122 28.2978 12.5651 28.2622 12.6067C28.2266 12.6483 28.1773 12.6758 28.1231 12.6843C28.0929 12.6883 28.0622 12.6857 28.033 12.6768C28.0038 12.6678 27.9769 12.6526 27.9542 12.6323C27.9314 12.612 27.9133 12.587 27.9011 12.5591C27.8888 12.5311 27.8828 12.5009 27.8833 12.4704V3.45463C27.8838 3.39806 27.9065 3.34395 27.9465 3.30395C27.9865 3.26395 28.0407 3.24125 28.0972 3.24074C28.1534 3.24237 28.2069 3.26543 28.2467 3.30519C28.2864 3.34496 28.3095 3.39842 28.3111 3.45463V8.54907C28.6806 7.88796 29.3417 7.44074 30.113 7.44074C31.3833 7.44074 32.1028 8.54907 32.1028 9.72222Z" fill="white"/><path d="M39.8222 10.0917C39.8212 10.1526 39.7961 10.2107 39.7524 10.2532C39.7086 10.2957 39.6499 10.3192 39.5889 10.3185H35.2917C35.4019 11.3815 36.1991 12.3537 37.3269 12.3537C38.0982 12.3537 38.6685 12.062 39.0963 11.4463C39.1162 11.4139 39.1438 11.387 39.1765 11.3678C39.2093 11.3486 39.2463 11.3377 39.2843 11.3361C39.3126 11.3353 39.3407 11.3403 39.3671 11.3508C39.3934 11.3612 39.4173 11.3769 39.4373 11.397C39.4573 11.417 39.473 11.4409 39.4835 11.4672C39.494 11.4935 39.499 11.5217 39.4982 11.55C39.4983 11.5891 39.487 11.6274 39.4657 11.6602C39.0315 12.412 38.1694 12.7815 37.3269 12.7815C35.8815 12.7815 34.8444 11.4852 34.8444 10.1046C34.8444 8.72407 35.875 7.42778 37.3269 7.42778C38.7657 7.42778 39.8157 8.71111 39.8222 10.0917ZM39.3556 9.89074C39.2648 8.82778 38.4481 7.85556 37.3204 7.85556C36.1926 7.85556 35.3954 8.82778 35.2852 9.89074H39.3556Z" fill="white"/><path d="M45.1046 7.73241C45.1087 7.78995 45.0899 7.84678 45.0523 7.8905C45.0146 7.93422 44.9612 7.96126 44.9037 7.96574C43.6398 8.1537 43.0694 9.18426 43.0694 10.3833V12.438C43.0693 12.4927 43.0497 12.5457 43.014 12.5872C42.9784 12.6288 42.9291 12.6563 42.875 12.6648C42.8448 12.6688 42.814 12.6663 42.7848 12.6573C42.7557 12.6483 42.7288 12.6332 42.706 12.6129C42.6833 12.5926 42.6651 12.5676 42.6529 12.5396C42.6407 12.5117 42.6346 12.4814 42.6352 12.4509V7.76481C42.6353 7.71005 42.6549 7.65712 42.6906 7.61553C42.7262 7.57395 42.7755 7.54645 42.8296 7.53796C42.8599 7.53395 42.8906 7.53651 42.9198 7.54547C42.9489 7.55443 42.9758 7.56958 42.9986 7.58989C43.0214 7.6102 43.0395 7.63518 43.0517 7.66313C43.0639 7.69108 43.07 7.72135 43.0694 7.75185V8.70463C43.4259 8.10185 44.1324 7.53148 44.8713 7.53148C44.9815 7.53148 45.1046 7.60926 45.1046 7.73241Z" fill="white"/><path d="M52.1694 10.0917C52.1684 10.1526 52.1433 10.2107 52.0996 10.2532C52.0559 10.2957 51.9971 10.3192 51.9361 10.3185H47.6389C47.7491 11.3815 48.5463 12.3537 49.6741 12.3537C50.4454 12.3537 51.0157 12.062 51.4435 11.4463C51.4634 11.4139 51.491 11.387 51.5238 11.3678C51.5565 11.3486 51.5935 11.3377 51.6315 11.3361C51.6598 11.3353 51.688 11.3403 51.7143 11.3508C51.7406 11.3612 51.7645 11.3769 51.7845 11.397C51.8045 11.417 51.8203 11.4409 51.8307 11.4672C51.8412 11.4935 51.8462 11.5217 51.8454 11.55C51.8455 11.5891 51.8343 11.6274 51.813 11.6602C51.3787 12.412 50.5167 12.7815 49.6741 12.7815C48.2287 12.7815 47.1917 11.4852 47.1917 10.1046C47.1917 8.72407 48.2222 7.42778 49.6741 7.42778C51.1259 7.42778 52.163 8.71111 52.1694 10.0917ZM51.7093 9.89074C51.6185 8.82778 50.8019 7.85556 49.6741 7.85556C48.5463 7.85556 47.7491 8.82778 47.6389 9.89074H51.7093Z" fill="white"/><path d="M59.1176 7.78426V12.4898C59.116 12.546 59.0929 12.5995 59.0531 12.6392C59.0134 12.679 58.9599 12.7021 58.9037 12.7037C58.8754 12.7045 58.8472 12.6995 58.8209 12.6891C58.7946 12.6786 58.7707 12.6629 58.7507 12.6428C58.7306 12.6228 58.7149 12.5989 58.7045 12.5726C58.694 12.5463 58.689 12.5181 58.6898 12.4898V11.5954C58.3333 12.3019 57.7046 12.8139 56.9009 12.8139C55.6241 12.8139 54.9176 11.7056 54.9176 10.5324V7.77778C54.9181 7.72121 54.9408 7.6671 54.9808 7.6271C55.0208 7.58709 55.0749 7.5644 55.1315 7.56389C55.1877 7.56552 55.2411 7.58858 55.2809 7.62834C55.3207 7.6681 55.3437 7.72157 55.3454 7.77778V10.5324C55.3454 11.4593 55.8704 12.3796 56.9009 12.3796C58.3463 12.3796 58.6898 11.025 58.6898 9.52778V7.7713C58.6903 7.73662 58.6991 7.70256 58.7154 7.67198C58.7318 7.64139 58.7552 7.61516 58.7837 7.59549C58.8123 7.57582 58.8452 7.56327 58.8796 7.5589C58.914 7.55453 58.9489 7.55846 58.9815 7.57037C59.0222 7.58931 59.0567 7.61951 59.0808 7.65741C59.1049 7.69532 59.1177 7.73933 59.1176 7.78426Z" fill="white"/><path d="M70 9.70278V12.4574C69.9984 12.5136 69.9753 12.5671 69.9355 12.6068C69.8958 12.6466 69.8423 12.6697 69.7861 12.6713C69.7578 12.6721 69.7296 12.6671 69.7033 12.6567C69.677 12.6462 69.6531 12.6305 69.6331 12.6104C69.6131 12.5904 69.5973 12.5665 69.5869 12.5402C69.5764 12.5139 69.5714 12.4857 69.5722 12.4574V9.70278C69.5722 8.77593 69.0472 7.86852 68.0167 7.86852C66.7204 7.86852 66.2278 9.25555 66.2278 10.3315V12.4574C66.2261 12.5136 66.2031 12.5671 66.1633 12.6068C66.1236 12.6466 66.0701 12.6697 66.0139 12.6713C65.9856 12.6721 65.9574 12.6671 65.9311 12.6567C65.9048 12.6462 65.8809 12.6305 65.8609 12.6104C65.8408 12.5904 65.8251 12.5665 65.8146 12.5402C65.8042 12.5139 65.7992 12.4857 65.8 12.4574V9.70278C65.8 8.77593 65.275 7.86852 64.2444 7.86852C62.9352 7.86852 62.3972 8.89907 62.4426 10.2731C62.4426 10.3056 62.4556 10.3639 62.4426 10.3833V12.4509C62.4425 12.5057 62.4228 12.5586 62.3872 12.6002C62.3516 12.6418 62.3023 12.6693 62.2482 12.6778C62.2179 12.6818 62.1872 12.6792 62.158 12.6703C62.1288 12.6613 62.1019 12.6462 62.0792 12.6259C62.0564 12.6055 62.0383 12.5806 62.0261 12.5526C62.0138 12.5247 62.0078 12.4944 62.0083 12.4639V7.76481C62.0084 7.71005 62.0281 7.65712 62.0637 7.61553C62.0994 7.57395 62.1487 7.54645 62.2028 7.53796C62.233 7.53395 62.2638 7.53651 62.2929 7.54547C62.3221 7.55443 62.349 7.56958 62.3718 7.58989C62.3945 7.6102 62.4126 7.63518 62.4249 7.66313C62.4371 7.69109 62.4431 7.72135 62.4426 7.75185V8.53611C62.812 7.875 63.4731 7.44074 64.2444 7.44074C65.1194 7.44074 65.8 7.99815 66.0787 8.80833C66.4352 8.00463 67.1287 7.44074 68.0167 7.44074C69.2806 7.44074 70 8.53611 70 9.70278Z" fill="white"/><path opacity="0.6" d="M5.37963 6.48796L0 8.93148L5.37963 12.1139L10.7657 8.93148L5.37963 6.48796Z" fill="white"/><path opacity="0.45" d="M0 8.93148L5.37963 12.1139V0L0 8.93148Z" fill="white"/><path opacity="0.8" d="M5.37963 0V12.1139L10.7657 8.93148L5.37963 0Z" fill="white"/><path opacity="0.45" d="M0 9.95555L5.37963 17.5389V13.1315L0 9.95555Z" fill="white"/><path opacity="0.8" d="M5.37963 13.1315V17.5389L10.7657 9.95555L5.37963 13.1315Z" fill="white"/></g><defs><clipPath id="clip0_8_3245"><rect width="70" height="17.5389" fill="white"/></clipPath></defs></svg>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement10(this)">\
    				<button class="refill-window__payment-btn" id="element10">\
    					<div class="other_crypto">OTHER CRYPTO</div>\
    				</button>\
    			</li>\
    			</ul>\
    			</div>\
    		<div class="refill-window__bonus"><span class="refill-window__bonus-text" id="bonus-text"></span></div>\
    		<div class="refill-window__content__pay">\
    			<div class="refill-window__payment-info">\
    				<div class="refill-window__amount-wrapper">\
    					<div class="refill-window__amount-input-wrapper">\
    						<div class="refill-window__pre-input">₽</div>\
    							<input class="refill-window__amount-input" placeholder="Введите сумму" type="number" id="refill-window__amount-input" value="500">\
    						</div>\
    					</div>\
    				<div class="refill-window__button-wrapper" id="buybtnwrap" onclick="OnClickBuyBtn(this)">\
    					<a class="refill-window__button--disabled" id="buybtn" target="_blank">пополнить</a>\
    				</div>\
    			</div>\
    		</div>\
    	</div></div>'
};

let btn_unlocked = 0;

function ResetBtns() {
    let btn1 = document.getElementById('element1');
    let btn2 = document.getElementById('element2');
    let btn3 = document.getElementById('element3');
    let btn4 = document.getElementById('element4');
    let btn5 = document.getElementById('element5');
    let btn6 = document.getElementById('element6');
    let btn7 = document.getElementById('element7');
    let btn8 = document.getElementById('element8');
    let btn9 = document.getElementById('element9');
    let btn10 = document.getElementById('element10');

    btn1.style.backgroundColor = "#1d1d26";
    btn2.style.backgroundColor = "#1d1d26";
    btn3.style.backgroundColor = "#1d1d26";
    btn4.style.backgroundColor = "#1d1d26";
    btn5.style.backgroundColor = "#1d1d26";
    btn6.style.backgroundColor = "#1d1d26";
    btn7.style.backgroundColor = "#1d1d26";
    btn8.style.backgroundColor = "#1d1d26";
    btn9.style.backgroundColor = "#1d1d26";
    btn10.style.backgroundColor = "#1d1d26";
}

function UnLockBuyBtn() {
    let btn_buy = document.getElementById('buybtn');
    btn_buy.classList.remove('refill-window__button--disabled');
    btn_buy.classList.add('refill-window__button--enable');
}

/**
 * Генерируем ссылку на оплату только при нажатии на оплатить
 * @param event
 * @constructor
 */
function OnClickBuyBtn(event) {
    if (btn_unlocked == 1) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 30 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlQiwi());
        }
    }
    if (btn_unlocked == 2) {
        appcentHandler();
    }
    if (btn_unlocked == 3) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 50 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 4) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 10 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 10 RUB.";
            document.getElementById('buybtn').removeAttribute("href");
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            document.getElementById('buybtn').setAttribute("href", OvhPayUrl);
        }
    }
    if (btn_unlocked == 5) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 50 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 6) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 30 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlQiwi());
        }
    }
    if (btn_unlocked == 7) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 50 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 8) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 1500 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 1500 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 9) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 1500 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 1500 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 10) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 100 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 100 RUB.";
            return false;
        } else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
}
var MD5 = function(d) {
    result = M(V(Y(X(d), 8 * d.length)));
    return result.toLowerCase()
};
function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
        _ = d.charCodeAt(r),
        f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f
}
function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)
        _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8)
        _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _
}
function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8)
        _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _
}
function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32,
    d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
        var h = m
          , t = f
          , g = r
          , e = i;
        f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551),
        m = safe_add(m, h),
        f = safe_add(f, t),
        r = safe_add(r, g),
        i = safe_add(i, e)
    }
    return Array(m, f, r, i)
}
function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
}
function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
}
function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
}
function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
}
function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
}
function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
}
function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
}

/**
 * Генерация ссылки для киви
 * @returns {string}
 */
function generateUrlQiwi() {
    var publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP5PFjShvHqFqVrUtjkc35pmkuQU11pX4tyARkHb4guLEqnGthNfF4EbSFbZ1kp5jEiWx1AAmd8tyboxD5rCKq7dbvhBtD2vw4QUmLcVd6T';
    var commentQiwi = `${CustomerSteamId}`;
    var successUrlQiwi = 'https://rustylife.ru';
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);
    return 'https://oplata.qiwi.com/create?amount=' + inputfloat + '&comment=' + commentQiwi + '&publicKey=' + publicKey + '&account=0&customFields[themeCode]=Konstantyn-K9-lD3vkZl&successUrl=' + successUrlQiwi;
}

/**
 * Генерация ссылки для енота
 * @returns {string}
 */
function generateUrlEnot() {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var MERCHANT_ID = 45517
      , // ID магазина
    SECRET_WORD = 'P-zRR94Ohg-2LE3bzkollv05TXg3o-Jr'
      , // Секретный ключ
    ORDER_AMOUNT = parseFloat(inputval)
      , // Сумма заказа
    PAYMENT_ID = new Date().getTime()
      , // ID заказа (мы используем time(), чтобы был
    SLUG = MD5(MERCHANT_ID + ':' + ORDER_AMOUNT + ':' + SECRET_WORD + ':' + PAYMENT_ID)
    return 'https://enot.io/pay?c=' + `${CustomerSteamId}` + `&cf=` + `${CustomerSteamId}` + '&m=' + MERCHANT_ID + '&oa=' + ORDER_AMOUNT + '&o=' + PAYMENT_ID + '&s=' + SLUG;
}
var colorgrayhover = "#272730";
function OnClickElement1(event) {
    /*QIWI*/
    ResetBtns();

    let element = document.getElementById('element1');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 1;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement2(event) {
    /*CENT.APP*/
    ResetBtns();

    let element = document.getElementById('element2');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 2;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement3(event) {
    /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element3');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 3;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement4(event) {
    /*MOSCOW.OVH x TOME*/
    ResetBtns();

    let element = document.getElementById('element4');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 4;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
}

function OnClickElement5(event) {
    /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element5');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 5;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement6(event) {
    /*QIWI*/
    ResetBtns();

    let element = document.getElementById('element6');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 6;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement7(event) {
    /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element7');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 7;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement8(event) {
    /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element8');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 8;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement9(event) {
    /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element9');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 9;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement10(event) {
    /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element10');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 10;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OpenPay(el, usefade=true, zind=false) {
    closepagePay();
    var div1 = document.createElement("div");
    div1.id = 'ModalPay';
    var div2 = document.createElement("div");
    div2.className = 'modalpay modalpay-service fade';
    if (!usefade)
        div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    var div3 = document.createElement("div");
    div3.className = "modalpay-dialog modalpay-lg";
    var div4 = document.createElement("div");
    div4.className = "modalpay-content";
    var div6 = document.createElement("div");
    div6.className = "modalpay-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    div8.className = "modalpay-backdrop fade show";
    div8.style = 'z-index: 1050;';
    if (el == "Oplata") {
        div2.style = 'display: flex; place-content: center; align-items: center; z-index: 1051;';
    }

    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div6);
    div1.appendChild(div8);
    if (usefade)
        setTimeout(()=>div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepagePay() {
    var Modal = document.getElementById('ModalPay');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null)
        return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
    btn_unlocked = 0;
}

function Open(el, usefade=true, zind=false) {
    closepage();
    var div1 = document.createElement("div");
    div1.id = 'Modal';
    var div2 = document.createElement("div");
    div2.className = 'modal modal-service fade';
    if (!usefade)
        div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    var div3 = document.createElement("div");
    div3.className = "modal-dialog modal-lg";
    if (el == "block")
        div3.className += " modal-lg-block"
    if (el == "block") {
        div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';
    }
    var div4 = document.createElement("div");
    div4.className = "modal-content";
    var div5 = document.createElement("div");
    div5.className = "modal-header";
    div5.innerHTML = '<h4 class="modal-title">' + curcontent[el].xhead + '</h4>';
    var div6 = document.createElement("div");
    div6.className = "modal-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    div7.className = "modal-footer";
    div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
    var div8 = document.createElement("div");
    div8.className = "modal-backdrop fade show";
    div8.style = 'z-index: 1050;';
    if (el == "Oplata") {
        div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';
    }

    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);
    div1.appendChild(div8);
    if (usefade)
        setTimeout(()=>div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepage() {
    var Modal = document.getElementById('Modal');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null)
        return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
}

function search(e) {
    if (e.offsetX < 1) {
        console.log(e.target.innerText + ' | ' + e.clientX);
        if (document.selection) {
            // IE
            var range = document.body.createTextRange();
            range.moveToElementText(e.target);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(e.target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.');
        } catch (err) {
            console.log('Oops, unable to copy' + err);
        }
    }
}

window.onload = function() {
    document.body.onclick = function(event) {
        if (event.target.id == 'closer')
            closepage();
        if (event.target.id == 'closer')
            closepagePay();
        if (event.target.className == 'refill-window__close')
            closepagePay();
        if (event.target.className == 'MsoCommand')
            search(event);
    }

    for (var i = 0; i < BlockListArrays.length; i++) {
        curcontent["block"].xcon += '<div class="block_by_category block_category_' + (i + 1) + '">';
        for (var b = 0; b < BlockListArrays[i].length; b++) {
            if (b == 5 && i == 4)
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            else if (BlockListArrays[i][b] == "pistol.prototype17") {
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/11/06/723437cdd667a17816dccdbdd75994c5.png">\
											<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            } else {
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://www.rustedit.io/images/imagelibrary/' + BlockListArrays[i][b] + '.png">\
											<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            }
        }
        curcontent["block"].xcon += '</div>';
    }
    curcontent["block"].xcon += '</div>\<br></i></div>';
}

var CustomerSteamId = "0";
// Стандартно 0, для теста указан id
var OvhPayUrl = "";

const appCentForm = document.getElementById('appcent-inp-form');

function appcentHandler() {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);

    if (inputfloat < 30 || isNaN(inputfloat)) {
        document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
        return false;
    } else {
        document.getElementById('bonus-text').innerText = "";
    }

    if (CustomerSteamId == "0" || CustomerSteamId == "") {//document.getElementById('appcent-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";

    //return false;
    }

    fetch('https://cent.app/api/v1/bill/create', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 13201|BLDmFNXQQOKY9lmyKY96bKZI8jLiv9kXrui6qLmX',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: inputfloat,
            shop_id: 'WG76jKb7xl',
            order_id: `${CustomerSteamId}`,
            payer_pays_commission: '1',
            name: `Пополнение для ${CustomerSteamId}`,
        })
    }).then((res)=>{
        if (res.ok) {
            return res.json();
        } else {
            console.log(res.status)
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        ;
    }
    ).then((res)=>{
        window.open(res.link_page_url);
    }
    )
}

function OvhUrlOverrite() {
    var slides = document.getElementsByClassName("nav-link");
    for (var i = 0; i < slides.length; i++) {
        var elelink = slides.item(i);
        var urlelelink = elelink.getAttribute("href");
        if (urlelelink.startsWith('https://pay.moscow.ovh')) {
            OvhPayUrl = urlelelink;
            console.log(OvhPayUrl);
            elelink.setAttribute("href", "javascript:;");
            elelink.setAttribute("onclick", "OpenOplata()");
        }
    }
}

function OpenOplata() {
    OpenPay('Oplata');
}

var DOMReady = function(a, b, c) {
    b = document,
    c = 'addEventListener';
    b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a)
}
window.addEventListener("load", function() {
    try {
        obtainShopSteamId();
    } catch (e) {
        console.log('element not found ' + e);
    }
});

function GetUserLang() {
    //ЭТА КРУТАЯ ФУНКЦИЯ ПОМОЖЕТ УЗНАТЬ КАКОЙ ЯЗЫК УСТАНОВЛЕН У ЮЗЕРА В КУКАХ ))) (en or ru)   console.log(GetUserLang()); = en  Это самый лучший вариант
    var nameEQ = "lang=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

ReplaceButton();
async function ReplaceButton() {
    var navbuttons = document.getElementsByClassName("nav");

    if (navbuttons.length == 0) {
        setTimeout(function() {
            ReplaceButton();
        }, 10);
        return;
    }

    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
    head.appendChild(script);

    for (let i = 0; i < navbuttons.length; i++) {
        var el = navbuttons[i];

        var buttons = el.getElementsByTagName("a");
        for (let s = 0; s < buttons.length; s++) {
            var button = buttons[s];
            if (button.getAttribute("href") == "/files/stores/backend/steam.php?login" || button.innerHTML == "Войти") {
                button.innerHTML = "Авторизация";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030460726785081414/Group_209.png");
                imageElem.classList.add("ico_login");
                button.appendChild(imageElem);
            }
            if (button.innerHTML == "Магазин" || button.innerHTML == "Store") {
                button.innerHTML = "Магазин";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "");
                imageElem.classList.add("icons_product");
                button.appendChild(imageElem);
                //Начало

                //Конец
            }

            if (button.innerHTML == "Russian") {
                button.innerHTML = " RU ";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030462893449297920/Group_210.png");
                imageElem.classList.add("iconss");
                button.appendChild(imageElem);
            }
            if (button.innerHTML == "English") {
                button.innerHTML = " EN ";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030811419391823944/197374.png");
                imageElem.classList.add("iconss");
                button.appendChild(imageElem);
            }
            if (button.innerHTML == " RU ") {
                button.innerHTML = " RU ";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030462893449297920/Group_210.png");
                imageElem.classList.add("iconss");
                button.appendChild(imageElem);
            }
            if (button.innerHTML == " EN ") {
                button.innerHTML = " EN ";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030811419391823944/197374.png");
                imageElem.classList.add("iconss");
                button.appendChild(imageElem);
            }
            if (button.innerHTML == "Информация") {
                button.innerHTML = "Информация";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", "https://svgshare.com/i/nR0.svg");
                imageElem.classList.add("iconss");
                button.appendChild(imageElem);
            }
            if ((button.innerHTML == "Профиль" || button.innerHTML == "Profile") && button.getAttribute("role") == "button") {

                // el.classList.remove("nav"); //удаляем класс nav
                const ava = await apiRequest();
                button.innerHTML = "";
                var imageElem = document.createElement("img");
                imageElem.setAttribute("src", ava.data.avatar);
                imageElem.classList.add("ava");
                button.appendChild(imageElem);
            }
        }
    }

    UpdateServerList();

    // storage.modal.banContainer.innerHTML = sliderHtml;
}

function UpdateCategories() {
    var catClass = document.getElementsByClassName("store-categories");
    if (catClass.length == 0) {
        setTimeout(function() {
            UpdateCategories();
        }, 10);
        return;
    }
    ReplaceButton();
    var categoryList = catClass[0].getElementsByTagName("button");

    for (let i = 0; i < categoryList.length; i++) {
        var cat = categoryList[i];

        if (cat.innerHTML == "Все") {
            if (cat.classList.contains("allitems"))
                return;
            //  cat.innerHTML = "";
            cat.classList.add("allitems");
            var imageElem = document.createElement("img");
            imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031689319674556568/all.png");

            imageElem.classList.add("catitem");
            cat.appendChild(imageElem);
        }
        if (cat.innerHTML == "Привилегии") {
            // cat.innerHTML = "";
            cat.classList.add("product_item");
            var imageElem = document.createElement("img");
            imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031978335531696159/94c7b834ecd8ba60.png");

            imageElem.classList.add("catitem");
            cat.appendChild(imageElem);
        }
        if (cat.innerHTML == "Кейсы") {
            // cat.innerHTML = "";
            cat.classList.add("case_item");
            var imageElem = document.createElement("img");
            imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031996464383152128/1.png");

            imageElem.classList.add("catitem");
            cat.appendChild(imageElem);
        }
        if (cat.innerHTML == "Наборы") {
            // cat.innerHTML = "";
            cat.classList.add("box_item");
            var imageElem = document.createElement("img");
            imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031980806207443026/db226f06b5e5a80b.png");

            imageElem.classList.add("catitem");
            cat.appendChild(imageElem);
        }
    }
}

async function UpdateServerList() {
    var serverList = document.getElementsByClassName("xserver");
    if (serverList.length == 0) {
        setTimeout(function() {
            UpdateServerList();
        }, 10);
        return;
    }

    var serversRequest = await GetServers();
    for (let i = 0; i < serverList.length; i++) {
        var server = serverList[i];
        if (serverList.length - 1 == i) {
            if (server.classList.contains("allonline"))
                continue;
            var title = server.getElementsByClassName("xserver__title")[0];
            var isEn = title.innerHTML.indexOf('Общий') > -1 ? "Игроков на сервере:" : "Играют на сервере:";
            title.innerHTML = isEn;
            server.classList.add("allonline");
        }
        var online = server.getElementsByClassName("xserver__status")[0];
        var onlineText = online.innerHTML;

        if (onlineText.indexOf('Выключен') > -1) {
            online.classList.add("offlineserver");
            continue;
        }

        server.appendChild(buttonToCopyServer);
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031965803274305577/copy.png");
        imageElem.classList.add("copyicon");
        imageElem.onclick = function(t) {
            var n = null;
            for (const child of t?.path[1]?.children) {
                if (child.className === "server-copy-ip") {
                    n = child;
                }
            }
            n.dataset.serverip && navigator.clipboard && (navigator.clipboard.writeText("client.connect ".concat(n.dataset.serverip)),
            ShowNotify("IP сервера успешно скопирован", false));
        }
        ;
        server.appendChild(imageElem);
    }
}

function ShowNotify(text, error) {
    var t, n = this, o = Date.now();
    document.querySelector(".toast-wrapper").insertAdjacentHTML("beforeend", '\n      <div data-toastid="'.concat(o, '" class="toast-wrapper__toast toast-wrapper__toast_').concat(error ? "error" : "success", '">\n          <p class="toast-wrapper__text">\n              ').concat(text, '\n          </p>\n\n          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18 6L6 18" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n              <path d="M6 6L18 18" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n      </div>\n    ')),
    document.querySelector('div[data-toastid="'.concat(o, '"] svg')).addEventListener("click", (function() {
        clearTimeout(t),
        RemoveToasts(o)
    }
    )),
    t = setTimeout((function() {
        RemoveToasts(o)
    }
    ), 2000)
}
function RemoveToasts(e) {
    document.querySelector('div[data-toastid="'.concat(e, '"]')).classList.add("toast-wrapper__toast_out"),
    setTimeout((function() {
        document.querySelector('div[data-toastid="'.concat(e, '"]')).remove()
    }
    ), 201)
}

const GetServers = async()=>{
    return await new Promise((res)=>{
        const request = new XMLHttpRequest();

        request.open('POST', `${window.location.origin}/files/stores/backend/store.info.php`);
        request.setRequestHeader('Accept', "application/json");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.onload = ()=>{
            res(JSON.parse(request.response));
        }

        request.send(JSON.stringify({
            action: "servers"
        }));
    }
    );
}
const apiRequest = async()=>{
    return await new Promise((res)=>{
        const request = new XMLHttpRequest();

        request.open('POST', `${window.location.origin}/files/stores/backend/store.users.php`);
        request.setRequestHeader('Accept', "application/json");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.onload = ()=>{
            res(JSON.parse(request.response));
        }

        request.send(JSON.stringify({
            action: "info"
        }));
    }
    );
}

;
class ItcSlider {
    static WRAPPER_SELECTOR = '.slider__wrapper';
    static ITEMS_SELECTOR = '.slider__items';
    static ITEM_SELECTOR = '.slider__item';
    static CONTROL_CLASS = 'slider__control';
    static SELECTOR_PREV = '.slider__control[data-slide="prev"]';
    static SELECTOR_NEXT = '.slider__control[data-slide="next"]';
    static SELECTOR_INDICATOR = '.slider__indicators>li';
    static SLIDER_TRANSITION_OFF = 'slider_disable-transition';
    static CLASS_CONTROL_HIDE = 'slider__control_hide';
    static CLASS_ITEM_ACTIVE = 'slider__item_active';
    static CLASS_INDICATOR_ACTIVE = 'active';
    static contains = [];

    static createInstances() {
        if (GetUserLang() == "en") {
            this.ITEM_SELECTOR = ".slider__item,.enslider";
        }
        document.querySelectorAll('[data-slider="itc-slider"]').forEach((el)=>{
            if (this.contains.find((item)=>item.el === el)) {
                return;
            }
            const dataset = el.dataset;
            const params = {};
            Object.keys(dataset).forEach((key)=>{
                if (key === 'slider') {
                    return;
                }
                let value = dataset[key];
                value = value === 'true' ? true : value;
                value = value === 'false' ? false : value;
                value = Number.isNaN(Number(value)) ? Number(value) : value;
                params[key] = value;
            }
            );
            this.contains.push({
                el,
                slider: new ItcSlider(el,params)
            });
            el.dataset.sliderId = this.contains.length;
            el.querySelectorAll('.slider__control').forEach((el)=>{
                el.dataset.sliderTarget = this.contains.length;
            }
            );
        }
        );

        var toasts = document.createElement("div");
        toasts.classList.add("toast-wrapper");
        document.body.appendChild(toasts);
    }

    /*проф2*/

    _balancingItems() {
        if (!this._balancingItemsFlag) {
            return;
        }
        const $wrapper = this._$wrapper;
        const $wrapperClientRect = $wrapper.getBoundingClientRect();
        const widthHalfItem = $wrapperClientRect.width / this._itemsInVisibleArea / 2;
        const count = this._$itemList.length;
        let translate;
        let clientRect;
        if (this._direction === 'next') {
            const wrapperLeft = $wrapperClientRect.left;
            const $min = this._$itemByMinOrder;
            translate = this._minTranslate;
            clientRect = $min.getBoundingClientRect();
            if (clientRect.right < wrapperLeft - widthHalfItem) {
                $min.dataset.order = this._minOrder + count;
                // translate += count * 100;
                translate += count * this._widthStep;
                $min.dataset.translate = translate;
                $min.style.transform = `translateX(${translate}px)`;
                // update values of extreme properties
                this._refreshExtremeValues();
            }
        } else {
            const wrapperRight = $wrapperClientRect.right;
            const $max = this._$itemByMaxOrder;
            translate = this._maxTranslate;
            clientRect = $max.getBoundingClientRect();
            if (clientRect.left > wrapperRight + widthHalfItem) {
                $max.dataset.order = this._maxOrder - count;
                // translate -= count * 100;
                translate -= count * this._widthStep;
                $max.dataset.translate = translate;
                $max.style.transform = `translateX(${translate}px)`;
                // update values of extreme properties
                this._refreshExtremeValues();
            }
        }
        // updating...
        requestAnimationFrame(this._balancingItems.bind(this));
    }
    _setActiveClass() {
        const activeItems = this._activeItems;
        const $itemList = this._$itemList;
        for (let i = 0, length = $itemList.length; i < length; i++) {
            const $item = $itemList[i];
            const index = +$item.dataset.index;
            if (activeItems.indexOf(index) > -1) {
                $item.classList.add(ItcSlider.CLASS_ITEM_ACTIVE);
            } else {
                $item.classList.remove(ItcSlider.CLASS_ITEM_ACTIVE);
            }
        }
    }
    _updateIndicators() {
        const $indicatorList = this._$indicatorList;
        const $itemList = this._$itemList;
        if (!$indicatorList.length) {
            return;
        }
        for (let index = 0, length = $itemList.length; index < length; index++) {
            const $item = $itemList[index];
            if ($item.classList.contains(ItcSlider.CLASS_ITEM_ACTIVE)) {
                $indicatorList[index].classList.add(ItcSlider.CLASS_INDICATOR_ACTIVE);
            } else {
                $indicatorList[index].classList.remove(ItcSlider.CLASS_INDICATOR_ACTIVE);
            }
        }
    }
    _move() {
        // const step = this._direction === 'next' ? -this._transformStep : this._transformStep;
        const step = this._direction === 'next' ? -this._widthStep : this._widthStep;
        let transform = this._transform + step;
        if (!this._config.loop) {
            // const endTransformValue = this._transformStep * (this._$itemList.length - this._itemsInVisibleArea);
            const endTransformValue = this._widthStep * (this._$itemList.length - this._itemsInVisibleArea);
            // transform = Math.round(transform * 10) / 10;
            if (transform < -endTransformValue || transform > 0) {
                return;
            }
            if (this._$controlPrev) {
                this._$controlPrev.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);
                this._$controlNext.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);
                if (transform === -endTransformValue) {
                    this._$controlNext.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
                } else if (transform === 0) {
                    this._$controlPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
                }
            }
        }
        const activeIndex = [];
        let i = 0;
        let length;
        let index;
        let newIndex;

        if (this._direction === 'next') {
            for (i = 0,
            length = this._activeItems.length; i < length; i++) {
                index = this._activeItems[i];
                index += 1;
                newIndex = index;
                if (newIndex > this._$itemList.length - 1) {
                    newIndex -= this._$itemList.length;
                }
                activeIndex.push(newIndex);
            }
        } else {
            for (i = 0,
            length = this._activeItems.length; i < length; i++) {
                index = this._activeItems[i];
                index -= 1;
                newIndex = index;
                if (newIndex < 0) {
                    newIndex += this._$itemList.length;
                }
                activeIndex.push(newIndex);
            }
        }
        this._activeItems = activeIndex;
        this._setActiveClass();
        this._updateIndicators();
        this._transform = transform;
        this._$items.style.transform = `translateX(${transform}px)`;
        this._$items.dispatchEvent(new CustomEvent('transition-start',{
            bubbles: true,
        }));

        if (index >= this._$itemList.length)
            index = 0;
    }
    _moveToNext() {
        this._direction = 'next';
        this._move();
    }
    _moveToPrev() {
        this._direction = 'prev';
        this._move();
    }
    _moveTo(index) {
        const $indicatorList = this._$indicatorList;
        let nearestIndex = null;
        let diff = null;
        let i;
        let length;
        for (i = 0,
        length = $indicatorList.length; i < length; i++) {
            const $indicator = $indicatorList[i];
            if ($indicator.classList.contains(ItcSlider.CLASS_INDICATOR_ACTIVE)) {
                const slideTo = +$indicator.dataset.slideTo;
                if (diff === null) {
                    nearestIndex = slideTo;
                    diff = Math.abs(index - nearestIndex);
                } else if (Math.abs(index - slideTo) < diff) {
                    nearestIndex = slideTo;
                    diff = Math.abs(index - nearestIndex);
                }
            }
        }
        diff = index - nearestIndex;
        if (diff === 0) {
            return;
        }
        this._direction = diff > 0 ? 'next' : 'prev';
        for (i = 1; i <= Math.abs(diff); i++) {
            this._move();
        }
    }
    _autoplay(action) {
        if (!this._config.autoplay) {
            return;
        }

        if (action === 'stop') {
            clearInterval(this._intervalId);
            this._intervalId = null;
            return;
        }
        if (this._intervalId === null) {
            this._intervalId = setInterval(()=>{
                this._direction = 'next';
                this._move();
            }
            , this._config.interval);
        }
    }
    _refresh() {
        // create some constants
        const $itemList = this._$itemList;
        const widthItem = $itemList[0].getBoundingClientRect().width;
        const widthWrapper = this._$wrapper.getBoundingClientRect().width;
        const itemsInVisibleArea = Math.round(widthWrapper / widthItem);

        if (widthItem === this._widthStep && itemsInVisibleArea === this._itemsInVisibleArea) {
            return;
        }

        this._autoplay('stop');

        this._$items.classList.add(ItcSlider.SLIDER_TRANSITION_OFF);
        this._$items.style.transform = 'translateX(0)';

        // setting properties after reset
        this._widthItem = widthItem;
        this._widthWrapper = widthWrapper;
        this._itemsInVisibleArea = itemsInVisibleArea;
        this._transform = 0;
        this._transformStep = 100 / itemsInVisibleArea;
        this._widthStep = widthItem;
        this._balancingItemsFlag = false;
        this._activeItems = [];

        // setting order and translate items after reset
        for (let i = 0, length = $itemList.length; i < length; i++) {
            const $item = $itemList[i];
            const position = i;
            $item.dataset.index = position;
            $item.dataset.order = position;
            $item.dataset.translate = 0;
            $item.style.transform = 'translateX(0)';
            if (position < itemsInVisibleArea) {
                this._activeItems.push(position);
            }
        }

        this._setActiveClass();
        this._updateIndicators();
        window.requestAnimationFrame(()=>{
            this._$items.classList.remove(ItcSlider.SLIDER_TRANSITION_OFF);
        }
        );

        // hide prev arrow for non-infinite slider
        if (!this._config.loop) {
            if (this._$controlPrev) {
                this._$controlPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
            }
            return;
        }

        // translate last item before first
        const count = $itemList.length - 1;
        // const translate = -$itemList.length * 100;
        const translate = -$itemList.length * this._widthStep;
        $itemList[count].dataset.order = -1;
        $itemList[count].dataset.translate = translate;
        $itemList[count].style.transform = `translateX(${translate}px)`;
        // update values of extreme properties
        this._refreshExtremeValues();
        // calling _autoplay
        this._autoplay();
    }
    next() {
        this._moveToNext();
    }
    prev() {
        this._moveToPrev();
    }
    moveTo(index) {
        this._moveTo(index);
    }
    refresh() {
        this._refresh();
    }
}
//

/*проф*/

function nocopy(event) {
    var event = event || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = true;
    }
    return true;
}
document.onmouseup = nocopy;
document.onmousemove = nocopy;
document.ondragstart = nocopy;
document.onselectstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;

const disabledKeys = ["u", "I", "J", "ctrl", "shift", "i", "j", "ctrl+shift+i", "ctrl+shift+j"];
const showAlert = e=>{
    e.preventDefault();
    return alert("Упс, вы не можете просматривать код сайта таким способом!");
}
document.addEventListener("contextmenu", e=>{
    showAlert(e);
}
);
document.addEventListener("keydown", e=>{
    if (e.ctrlKey && disabledKeys.includes(e.key) || e.key === "F12") {
        showAlert(e);
    }
}
);
/*/////////////////////////////////////////////////////*/
console.log('%c Discord: ', 'color: white; background-color: #2274A5', '7859.');
console.log('%c vk.com: ', 'color: white; background-color: #95B46A', 'https://vk.com/k1ss_lyak');
console.log('%c Авторский доступ: ', 'color: white; background-color: #D33F49', 'Данный материал используется исключительно в личностных целях.');

//Тут вы можете использовать свой js код. Он будет подключен в начале каждой страницы
let xaromi = 0;
function* finds(){
if(document.querySelector('.product') || document.querySelector('.package-complete') || document.querySelector('.colqq')) yield ++xaromi;
}

document.addEventListener('load', async () => {
if(finds().next().value === 2) {
const allProducts = document.querySelectorAll('.product__price')
await allProducts.forEach(el => {
if(parseInt(el.innerText) === 0){
el.innerText = 'БЕСПЛАТНО'
el.closest('.product').querySelector('.product__discount') && el.closest('.product').querySelector('.product__discount').remove()
}
})

}
}, true);