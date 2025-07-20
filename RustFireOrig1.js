const event = new CustomEvent("setCustomConfig")

window.productsGrid = 5;
window.currency = 'RUB'
window.defaultPaymentAmount = 150
window.zeroToFree = true
window.oldDesignDropdownProduct = true
window.sidebarStoreToRight = false
window.sidebarProfileToRight = false
window.newYearVibe = false
window.hideServerSelector = false

window.dispatchEvent(event);

const svgRU = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="30px" height="30px" viewBox="0 0 66 66" enable-background="new 0 0 66 66" xml:space="preserve">
<g>
	<path fill="#E73B36" d="M2,40v8.223C2,51.586,4.672,54,7.968,54h50.063C61.327,54,64,51.586,64,48.223V40H2z"/>
	<path fill="#F0F7F6" d="M58.031,12H7.968C4.672,12,2,14.414,2,17.777V26h62v-8.223C64,14.414,61.327,12,58.031,12z"/>
	<rect x="2" y="26" fill="#3757A6" width="62" height="14"/>
	<g>
		<g>
			<path fill="#D31C1C" d="M57.75,54c3.297,0,6.25-2.414,6.25-5.777V40H41.392L57.75,54z"/>
			<path fill="#DFF2EF" d="M58.031,12H7.968l16.641,14H64v-8.223C64,14.414,61.327,12,58.031,12z"/>
			<polygon fill="#20448E" points="41.533,40 64,40 64,26 24.466,26 			"/>
			<path fill="#CAEAE4" d="M58.031,12H7.968l46.261,14H64v-8.223C64,14.414,61.327,12,58.031,12z"/>
			<polygon fill="#103577" points="64,28.848 64,26 53.833,26 			"/>
			<path fill="#C41010" d="M64,48.067C64,51.734,61.327,54,58.031,54H7.968C4.672,54,2,51.352,2,47.989"/>
		</g>
	</g>
</g>
</svg>
`;

const svgEN = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px"  viewBox="0 0 40 30" version="1.1">
<g id="surface1">
<rect x="0" y="0" width="40" height="30" style="fill:rgb(0%,0%,40%);fill-opacity:1;stroke:none;"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 0 0 L 0 3.355469 L 35.527344 30 L 40 30 L 40 26.648438 L 4.472656 0 Z M 40 0 L 40 3.355469 L 4.472656 30 L 0 30 L 0 26.648438 L 35.527344 0 Z M 40 0 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.667969 0 L 16.667969 30 L 23.332031 30 L 23.332031 0 Z M 0 10 L 0 20 L 40 20 L 40 10 Z M 0 10 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(80%,0%,0%);fill-opacity:1;" d="M 0 12 L 0 18 L 40 18 L 40 12 Z M 18 0 L 18 30 L 22 30 L 22 0 Z M 18 0 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(80%,0%,0%);fill-opacity:1;" d="M 0 30 L 13.332031 20 L 16.316406 20 L 2.980469 30 Z M 0 0 L 13.332031 10 L 10.351562 10 L 0 2.234375 Z M 23.6875 10 L 37.019531 0 L 40 0 L 26.667969 10 Z M 40 30 L 26.667969 20 L 29.648438 20 L 40 27.765625 Z M 40 30 "/>
</g>
</svg>
`;
function replaceTextWithFlags() {
    const languageButtons = document.querySelectorAll('.LangSwitcher-module__lang');
    Array.from(languageButtons).forEach(button => {
        if (button.textContent.trim() === 'Русский') {
            button.innerHTML = svgRU;
        } else if (button.textContent.trim() === 'English') {
            button.innerHTML = svgEN;
        }
    });
}

function replaceLanguageTextWithFlag() {
    const languageSpans = document.querySelectorAll('.LangSwitcher-module__currentLang');
    Array.from(languageSpans).forEach(span => {
        if (span.textContent.trim() === 'RU') {
            span.innerHTML = svgRU;
        } else if (span.textContent.trim() === 'EN') {
            span.innerHTML = svgEN;
        }
    });
}

var curcontent = [];
curcontent["rules"] = {
    xhead: 'Правила',
    xcon: '<div class="xbox_custom_rules" style="text-align: left;"><ul><p class="MsoNormal"><span>ИГРОВОЙ ПРОЦЕСС</span></p>\
<p><li>1.0 ЗАПРЕЩЕНО Использовать/Хранить/Распространять стороннее ПО или любые другие средства (ЧИТЫ/МАКРОСЫ/СПУФЕРЫ/ПРОСВЕТ), позволяющие получить преимущество над другими игроками.Наличие покупок запрещенного ПО:(Читы/Макросы/Спуферы, Просветы и т.п) приравнивается к хранению.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (БАН НАВСЕГДА).</li></p>\
<p><li>1.1 ЗАПРЕЩЕНО Использование багов игры/сервера: (Строиться/Хранить лут в текстурах, использовать прозрачный сет ,а также использовать другие баги игры/сервера, которые дают преимущество над другими игроками).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ).</li></p>\
<p><li>При обнаружении бага или недоработки карты/сервера незамедлительно сообщите администрации об этом через сообщение в нашу группу ВКонтакте или Discord.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1-ый раз БАН 1 ДЕНЬ / 2-ой раз БАН 7 ДНЕЙ).</li></p>\
<p><li>1.2 Постройка длинных "усов" у дома.</li></p>\
<p><li>Нарушение данного правила наказывается: (1-ый раз ПРЕДУПРЕЖДЕНИЕ / 2-ой раз БАН 1 ДЕНЬ)</li></p>\
<p><li>1.3. КИДАТЬ на кастомки ЗАПРЕЩЕНО (продавая кастомку за игровую валюту (сера, металл, мвк и т.д.) Вы обязуетесь снести все свои фундаменты(сетхомы) при передаче кастомки. Обманывать строго ЗАПРЕЩЕНО.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ)</li></p>\
<p><li>1.4. Обманывать игроков ЗАПРЕЩЕНО (писать в чат, что телепортируете игрока в Сейф зону, а по итогу телепортируете в другое место и убьете).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ)</li></p>\
<p><li>1.5 Гриферство ЗАПРЕЩЕНО (после рейда откидывать свой сетхом и время от времени тепаться в этот же дом, забирая ресурсы и убивая хозяина)</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ)</li></p>\
<p><li>1.6. ЗАПРЕЩЕНО себя выдавать за модерацию/администрацию проекта.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (30 ДНЕЙ)</li></p><br>\
<p class="MsoNormal"><span>ПРОВЕРКА ИГРОКОВ</span></li></p>\
<p><li>2.0 Администрация/Модерация в любой момент имеет право проверить Ваш ПК на наличие читов/макросов. На предоставление дискорда - 5 минут. По истечению 5 минут - бан за отказ от проверки. Мы не будем сохранять или передавать любую информацию, не связанную с растом и читами, которую получим от Вас.</li></p>\
<p><li>Выход с проверки, Отказ от проверки, Чистка Пк : (БАН НАВСЕГДА).</li></p>\
<p><li>Не предоставлении информации модератору: (БАН НАВСЕГДА).</li></p>\
<p><li>2.1 Модерация/Администрация сервера вправе сама решать, как наказать игрока за то или иное нарушение. Игрок может отделаться простым предупреждением, а может и попасть в бессрочный бан.</li></p>\
<p><li>2.2 Если при проверке у вас были обнаружены Читы/Макросы/Спуфер/подписки на запрещенное ПО/ подписки на ДС-каналы с Читами/Макросами или найдены следы удаленных Макросов/Читов/Спуферов: (БАН НАВСЕГДА). Постоянные тиммейты банятся на срок - 30 дней.</li></p>\
<p><li>2.3 Если у вас имеются баны на других проектах МЕНЕЕ ГОДА, либо же EAC баны на других аккаунтах МЕНЕЕ 90 ДНЕЙ: (БАН НАВСЕГДА). Вы несете ответственность за свои аккаунты.</li></p>\
<p><li>2.4 Мультиаккаунты ЗАПРЕЩЕНЫ (обход основного бана посредством игры с другого акка ): (БАН НАВСЕГДА)</li></p>\
<p><li>2.5. ПОДКУП модератора на проверке : (БАН НАВСЕГДА). В случае , если модератор принял данное предложение, то последует снятие с должности и бан по причине - Превышение полномочий модератором. (БАН НАВСЕГДА).</li></p>\
<p><li>2.6. Если при проверке у вас была обнаружена чистка пк : (БАН НАВСЕГДА) Постоянные тиммейты наказываются баном: (30 ДНЕЙ).</li></p>\
<p><li>2.7 При проверке вы обязаны скачать архив с программами для проверки на запрещенные файлы. Ссылка на скачивание архива https://disk.yandex.ru/d/2JJTnNdcZ0IdeA Если же вы отказываетесь,то модератор имеет полное право вас забанить по пункту правил: 1.0</li></p>\
<p><li>2.8 Если у вас плохое качество демонстрации экрана,то вы будете обязаны скачать AnyDesk с официального сайта: https://anydesk.com/ru/downloads Если же вы отказываетесь,то модератор имеет полное право вас забанить по пункту правил: 1.0</li></p>\
<p><li>2.9 Запрещено иметь версию Windows, которая чистит за собой недавние действия, логи, отключен Prefetch. Для игры на проекте нужно в переустановить Windows https://www.microsoft.com/ru-ru/software-download/</li></p><br>\
<p class="MsoNormal"><span>ЧАТ</span></li></p>\
<p><li>3.0 ЗАПРЕЩЕНО флудить/спамить в чат ( Повторять одни и те-же строчки/буквы в чат от 3-ёх сообщений подряд - МУТ 5 МИНУТ).</li></p>\
<p><li>3.1 ЗАПРЕЩЕНЫ жёсткие оскорбления, такие как д**б**б, х**с*с, бл***на и т.д. (МУТ 5 МИНУТ)</li></p>\
<p><li>3.2 РАЗРЕШЕНЫ лёгкие маты и оскорбления, такие как с**а, б***ь, к*з*л,ч*о, т*п*ц* , д**н и им подобные</li></p>\
<p><li>3.3 За многократное НАРУШЕНИЕ, более 5-6 мутов за жёсткие оскорбления , игрок может получить игровой мут на долгий срок</li></p>\
<p><li>3.4 ЗАПРЕЩЕНО оскорблять/упоминать родителей ( За плохое упоминание родителей, игрок получит МУТ НА 1 ДЕНЬ)</li></p>\
<p><li>3.5 ЗАПРЕЩЕНА реклама сторонних проектов в любой форме наказание: (МУТ НА 1 ДЕНЬ)</li></p>\
<p><li>3.6 ЗАПРЕЩЕНЫ жёсткие оскорбления Администрации/Модерации/Сервера : (1-ый раз МУТ 5 МИНУТ / повторный раз МУТ 10-15 МИНУТ)</li></p>\
<p><li>3.7 ЗАПРЕЩЕНО разжигать межнациональные конфликты: (1-ый раз МУТ 5 МИНУТ / повторный раз МУТ 10-15 МИНУТ)</li></p><br>\
<p class="MsoNormal"><span>ЛИМИТ ИГРОКОВ</span></li></p>\
<p><li>4.0 ЗАПРЕЩЕНО играть в команде более 3-ёх человек. Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.1 ЗАПРЕЩЕНО играть с другим (-ими) тиммейтами, пока основные ОФЛАЙН. Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.2 ЗАПРЕЩЕНА постоянная смена тиммейта ( РАЗРЕШЕНА 1 смена за вайп). Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.3 ЗАПРЕЩЕНО строить дома(деревни) по соседству с дружественными группами игроков, тем самым создавать коалиции.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (3 ДНЯ)</li></p>\
<p><li>Для CLANS ЗАПРЕЩЕНЫ альянсы (когда два клана объединяются и атакуют другой клан).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1-ый раз 3 дня, 2-ой раз 7 дней и т.д.)</li></p>\
<p><li>4.4 ЗАПРЕЩЕНО играть с другим (-ими) игроками, если у Вас разные пачки (зелёнка).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.5 ЗАПРЕЩЕНО строить отели.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>Любые совместные действия будут наказываться!</li></p>\<br>\
</ul><div class="unban" style="background: #333; border-radius: 10px; padding: 20px;"><p class="MsoNormal2" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокировки</p><span>Заявку на разблокировку аккаунта можно подать через года после бана, если вы получили бан по причине читы, макросы и в некоторых случаях игра с читером. Подать заявку можно в свободной форме в <a class="unbancolor" href="https://vk.com/rust.fire" target="_blank" rel="noopener noreferrer">группу ВК</a></span></div></div>'
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
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "VIP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/548699316.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/191795897.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1035059994.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1660607208.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x5000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2133577942.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x250</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div>	</div>'
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
<div class="xbox_custom_kits"><div class="serverheader">Кит - "Строитель" <span>Откат 5М</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-307490664.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1224598842.png"><div class="kit-item__quantity">x1</div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Охотник" - <span>Откат 30м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png"><div class="kit-item__quantity">x36</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png"><div class="kit-item__quantity">x3</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1127699509.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.bone.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1666761111.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-459156023.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-148163128.png"><div class="kit-item__quantity">x1</div></div></div></div></div><div class="serverheader">Кит "Медицина" - <span>Откат 20м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png"><div class="kit-item__quantity">x10</div></div></div></div></div><div class="serverheader">Кит "Еда" - <span>Откат 30м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1043746011.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1734319168.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/93029210.png"><div class="kit-item__quantity">x5</div></div></div></div></div><div class="serverheader">Кит  "Стартовый" - <span>ОТКАТ 999Ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x5000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x500</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-975723312.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1253290621.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-505639592.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/271534758.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/124310981.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-139769801.png"><div class="kit-item__quantity">x1</div></div></div></div></div>  </div></div>'
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
<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PREMIUM" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2033918259.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x150</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1660607208.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-699558439.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x10000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x500</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
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
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "ELITE" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/456448245.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416621.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x25000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x10000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x250</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x750</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomElite" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x100</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
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
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "FIRE" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x300</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/563023711.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/470729623.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x50</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x50</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x33000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x40000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x500</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x1250</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">				<div class="kit-item__quantity">x1000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">				<div class="kit-item__quantity">x1000</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomFire" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x150</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
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
<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "FIRE PRO" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778367295.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x600</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/563023711.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/470729623.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png"><div class="kit-item__quantity">x25</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png"><div class="kit-item__quantity">x25</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x70</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x80</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x60</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x1000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">				<div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">				<div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">				<div class="kit-item__quantity">x800</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomFirePro" - <span>24 часа</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x8</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x300</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "FireProBonus" - <span>48 часов</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/ea48412ea9e6c5c530dca8a147c413e5.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/18792a460ae3f80eff76f080043173e6.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/193190034.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/21/3fccd57c18627b5b016d8a748bbf2415.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-295829489.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://skyplugins.ru/data/resource_icons/0/114.jpg?1579909421">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/523855532.png">				<div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};


curcontent["block"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="xbox_custom_block"><div class="kit-items">'

};

var BlockListArrays = [['shotgun.double', 'pistol.revolver', 'ammo.shotgun'], ['pistol.semiauto', 'pistol.python', 'shotgun.pump', 'shotgun.spas12', 'coffeecan.helmet', 'roadsign.gloves', 'roadsign.jacket', 'roadsign.kilt'], ['pistol.prototype17', 'pistol.m92', 'smg.2', 'smg.thompson', 'grenade.molotov'], ['rifle.semiauto', 'rifle.m39', 'smg.mp5', 'metal.plate.torso.icevest', 'metal.plate.torso', 'metal.facemask', 'metal.facemask.hockey', 'ammo.rifle.incendiary'], ['rifle.ak', 'rifle.ak.ice', 'rifle.ak.diver', 'rifle.lr300', 'grenade.beancan'], ['heavy.plate.jacket', 'heavy.plate.pants', 'heavy.plate.helmet'], ['rifle.bolt', 'lmg.m249', 'hmlmg', 'rifle.l96', 'ammo.rifle.explosive', 'explosive.satchel'], ['multiplegrenadelauncher', 'homingmissile.launcher', 'rocket.launcher', 'explosive.timed', 'ammo.grenadelauncher.buckshot', 'ammo.rocket.smoke', 'ammo.grenadelauncher.he', 'ammo.rocket.fire', 'ammo.rocket.hv', 'ammo.rocket.basic', 'ammo.rocket.seeker', 'ammo.rocket.mlrs', 'submarine.torpedo.straight']];

function Open(key) {
    if (!curcontent[key]) {
        console.error('Ключ не найден');
        return;
    }

    closeModal();

    const modalContent = `
<div role="presentation" onmousedown="closeModal()" id="${key}Modal" class="customModalWrapper active">
   <div class="customModalOverflow">
      <div class="customModalPosition">
         <div role="presentation" onmousedown="event.stopPropagation();" class="customModalContent">
            <div class="boxHeader">${curcontent[key].xhead}</div>
            <div class="boxBody">
               ${curcontent[key].xcon}
            </div>
            <div class="boxFooter">
                            <button id="closer" onclick="closeModal()" type="button" class="btn Button-module__btn Button-module__gray">Закрыть</button>
                        </div>
         </div>
      </div>
   </div>
</div>
`;

    var div1 = document.createElement("div");
    div1.id = 'Modal';
    div1.innerHTML = modalContent;

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closeModal() {
    const existingModal = document.getElementById('Modal');
    if (existingModal) {
        existingModal.parentNode.removeChild(existingModal);
    }

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove("modal-open");
}




function main() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        const { player } = window.getState().player;

        if (player) {
        	const userAvatar = `
              <a class="avatar-link" style="width: 38px; height: 38px" href="/profile">
                  <img style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" src="${player.avatar}">
              </a>
        	`;
          
          	const profileLink = document.querySelector('.PlayerMenu-module__profileLink');
              if (profileLink) {
                const parent = profileLink.parentNode;
                parent.removeChild(profileLink);
                parent.insertAdjacentHTML('beforeend', userAvatar);
        	}
        }
		
      
        
      
      	const newLogoContent = `
            <a class="navbar-brand" href="/"></a>
        `;
      
        const logo = document.querySelector('.Header-module__logoWrapper');
        if (logo) {
            const parent = logo.parentNode;
            parent.removeChild(logo);
            parent.insertAdjacentHTML('afterbegin', newLogoContent);
        }
      
      	const test = document.querySelector('.PlayerMenuMobile-module__header123');
      	if (test) {
            const parent = test.parentNode;
            parent.removeChild(test);
            parent.insertAdjacentHTML('afterbegin', newLogoContent);
        }
      

        replaceTextWithFlags();
        replaceLanguageTextWithFlag();
    });
  
  
  	window.componentsManager.addListener('ROULETTE_PRODUCT_MODAL', 'DID_MOUNT', () => {
      const elements = document.querySelectorAll('.productModalItemCount');
      elements.forEach(function(element) {
        var regex = /x(\d+)(-x(\d+))?/;
 		element.textContent = element.textContent.replace(regex, function(match, p1, p2, p3) {
            return p2 ? `Кол-во: ${p1}-${p3}шт` : `Кол-во: ${p1}шт`;
        });
        
        var elementsx = document.querySelectorAll('.RouletteContent-module__rouletteItemInfo span');
          elementsx.forEach(function(element) {
              if (/^x\d+$/.test(element.textContent)) {
                  element.textContent = element.textContent.replace('x', '') + 'шт';
              }
    	});
      });       
	});
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
    window.componentsManager.load();
  
}

window.onload = function() {
    document.body.onclick = function(event) {
      console.log(event.target.id)
        if (event.target.id == 'closer')
            closepage();
    }
}

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

document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'S'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'D'.charCodeAt(0)) {
        return false;
    }
}

if (window.isAppReady) {
    main();
} else {
    window.addEventListener('appReady', main);
}





@import url(https://ch3rn1k.me/archive/fonts/web/CeraPro/CeraPro.css);body {
    background-color: #000!important;
    font-family: CeraPro,sans-serif;
    background-size: cover!important
}

@font-face {
    font-family: FontAwesome;
    src: url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.eot?v=4.6.3);
    src: url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.eot?#iefix&v=4.6.3) format("embedded-opentype"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.woff2?v=4.6.3) format("woff2"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.woff?v=4.6.3) format("woff"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.ttf?v=4.6.3) format("truetype"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular) format("svg");
    font-weight: 400;
    font-style: normal
}

body {background-image: url(https://i.postimg.cc/sDy36MRB/g-Bq-Jz8d-2-1.png);}


body,
.customModalWrapper,
.customModalOverflow,
.ModalLayout-module__overflowWrapper {
  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
}

body::-webkit-scrollbar,
.customModalOverflow::-webkit-scrollbar,
.ModalLayout-module__overflowWrapper::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track,
.customModalOverflow::-webkit-scrollbar-track,
.ModalLayout-module__overflowWrapper::-webkit-scrollbar-track {
  background: var(--sb-track-color);
}

body::-webkit-scrollbar-thumb,
.customModalOverflow::-webkit-scrollbar-thumb,
.ModalLayout-module__overflowWrapper::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.fa-lg {
    font-size: 1.33333333em;
    line-height: .75em;
    vertical-align: -15%
}

.fa-2x {
    font-size: 2em
}

.fa-3x {
    font-size: 3em
}

.fa-4x {
    font-size: 4em
}

.fa-5x {
    font-size: 5em
}

.fa-fw {
    width: 1.28571429em;
    text-align: center
}

.fa-ul {
    padding-left: 0;
    margin-left: 2.14285714em;
    list-style-type: none
}

.fa-ul>li {
    position: relative
}

.fa-li {
    position: absolute;
    left: -2.14285714em;
    width: 2.14285714em;
    top: .14285714em;
    text-align: center
}

.fa-li.fa-lg {
    left: -1.85714286em
}

.fa-border {
    padding: .2em .25em .15em;
    border: solid .08em #eee;
    border-radius: .1em
}

.fa-pull-left {
    float: left
}

.fa-pull-right {
    float: right
}

.fa.fa-pull-left {
    margin-right: .3em
}

.fa.fa-pull-right {
    margin-left: .3em
}

.pull-right {
    float: right
}

.pull-left {
    float: left
}

.fa.pull-left {
    margin-right: .3em
}

.fa.pull-right {
    margin-left: .3em
}

.fa-spin {
    animation: fa-spin 2s infinite linear
}

.fa-pulse {
    animation: fa-spin 1s infinite steps(8)
}

@keyframes fa-spin {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(359deg)
    }
}

.fa-rotate-90 {
    transform: rotate(90deg)
}

.fa-rotate-180 {
    transform: rotate(180deg)
}

.fa-rotate-270 {
    transform: rotate(270deg)
}

.fa-flip-horizontal {
    transform: scale(-1,1)
}

.fa-flip-vertical {
    transform: scale(1,-1)
}

:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90 {
    -webkit-filter: none;
    filter: none
}

.fa-stack {
    position: relative;
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    vertical-align: middle
}

.fa-stack-1x,.fa-stack-2x {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center
}

.fa-stack-1x {
    line-height: inherit
}

.fa-stack-2x {
    font-size: 2em
}

.fa-inverse {
    color: #fff
}


:root[data-theme] {
    --default-font-family: CeraPro;
 
  	--bg-color-900: #49494936;
    --bg-color-700: #49494936;
  	--accent-color-800: rgb(255 255 255);
  	--accent-color-900: rgb(255 255 255);
  	--font-color-800: rgb(255 255 255);
  	    --background-color: rgb(24 24 27 / 31%);
    --text-color: #A1A1AA;
    --card-background-color: rgba(255, 255, 255, .015);
    --card-border-color: rgba(255, 255, 255, 0.1);
    --card-box-shadow-1: rgba(0, 0, 0, 0.05);
    --card-box-shadow-1-y: 3px;
    --card-box-shadow-1-blur: 6px;
    --card-box-shadow-2: rgba(0, 0, 0, 0.1);
    --card-box-shadow-2-y: 8px;
    --card-box-shadow-2-blur: 15px;
    --card-label-color: #FFFFFF;
    --card-icon-color: #D4D4D8;
    --card-icon-background-color: rgba(255, 255, 255, 0.08);
    --card-icon-border-color: rgba(255, 255, 255, 0.12);
    --card-shine-opacity: .1;
    --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #ff7912 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
    --card-line-color: #2A2B2C;
    --card-tile-color: rgb(227 184 12 / 29%);
    --card-hover-border-color: rgba(255, 255, 255, 0.2);
    --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
    --card-hover-box-shadow-1-y: 5px;
    --card-hover-box-shadow-1-blur: 10px;
    --card-hover-box-shadow-2: rgba(0, 0, 0, 0.3);
    --card-hover-box-shadow-2-y: 15px;
    --card-hover-box-shadow-2-blur: 25px;
    --card-hover-icon-color: #ff0000bd;
    --card-hover-icon-background-color: rgb(106 98 72 / 37%);
    --card-hover-icon-border-color: rgb(255 214 0 / 81%);
  
  	--sb-track-color: #262626;
  	--sb-thumb-color: #f8ae1d;
  	--sb-size: 10px;
}

.LangSwitcher-module__currentLang {
    cursor: pointer;
    padding: 0px;
  	display: flex;
    justify-content: center;
    align-items: center;
}

.Header-module__wrapper {
    background: #49494936;
    margin-bottom: 20px;
    padding: 0 15px;
    min-height: 60px;
    font-weight: 500;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  	border-radius: 10px;
  	-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.PlayerBalance-module__btn,
.HeaderNav-module__link,
.LangSwitcher-module__btn {
    cursor: pointer;
    border-radius: 10px;
    display: flex;
     font-size: 13pt;
    align-items: center;
    justify-content: center;
  	font-weight: 600;
    white-space: nowrap;
    transition: all .1s ease;
  	padding: 10px;
    max-height: 40px;
}

.PlayerBalance-module__btn:focus,
.HeaderNav-module__link:focus,
.LangSwitcher-module__btn:focus {
  background: transparent;
  color: inherit;
}
.PlayerBalance-module__btn:hover,
.HeaderNav-module__link:hover,
.LangSwitcher-module__btn:hover {
    background: linear-gradient(to left,#f90 0,#f1c339 100%);
    color: #292b2c!important;
}

.LangSwitcher-module__list {
 	background: #262626;
  	border-radius: 10px;
    border: 1px solid #f2c035;
}


.avatar-link {
    display: inline-block;
    border-radius: 50%;
    transition: box-shadow 0.3s ease;
}

.avatar-link:hover {
    box-shadow: 0 0 0 3px #f1c339;
}

/* ИКОНКА ФЛАГА */
.flag-icon {
    width: 20px;
    height: auto;
    display: inline-block;
    vertical-align: middle;
}
.flag-icon-selected {
    width: 25px;
    height: auto;
    display: flex;
}
.LangSwitcher-module__lang:hover, .LangSwitcher-module__lang:focus {
	background: linear-gradient(to left,#f90 0,#f1c339 100%);
    color: #292b2c;
}
/* ИКОНКА ФЛАГА */


/* ИКОНКА LOGO */
.navbar-brand {
	width: 0;
    height: 100%;
    0 10px 0 10px
  	margin-left: -5px;
    font-weight: 600;
}
.navbar-brand::before {
    content: '\f06d';
    font-family: FontAwesome;
    margin-right: 6px;
  	font-size: 24px;   
    color: #f8ae1d;
    padding: 10px;
}
/* ИКОНКА LOGO */

/* БЛОК ПРЕДМЕТОВ */
.Shop-module__wrapper .boxBody {
	border-radius: 10px 10px 0px 0px;
}
.Shop-module__wrapper .boxFooter {
	border-radius: 0px 0px 10px 10px;
}

/* БЛОК ПРЕДМЕТОВ */

/* КНОПКИ КАТЕГОРИЙ */
.Categories-module__enableFocus {
	color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.1);
    margin-left: 5px;
    border-radius: 7.5px
}
.Categories-module__category.Categories-module__enableFocus:focus {
	color: #fff;
    background: linear-gradient(to left,#f90 0,#f1c339 100%);
}
.Categories-module__enableFocus:hover {
	transform: scale(1);
    color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.2);
}
.Categories-module__category.Categories-module__active {
	color: #fff;
    border: none;
    transform: scale(1.10);
    font-weight: 400;
    background: linear-gradient(to left,#f90 0,#f1c339 100%);
}
/* КНОПКИ КАТЕГОРИЙ */

/* ПОИСК */
.Search-module__wrapper {
	background: none;
}
.Search-module__input:focus {
    background: rgba(255,255,255,.08);
}
.Search-module__input {
	color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.04);
    border-radius: 0 15px 15px 0;
}
.Search-module__iconWrapper {
    border-radius: 15px 0px 0px 15px;
  	background: rgba(255,255,255,.08);
}
/* ПОИСК */

/* ТОВАР */
.Products-module__wrapper {
    margin-top: 40px;
}

.Product-module__wrapper {
	box-shadow: 0 0 5px 0 rgba(0 0 0 / 95%);
  	background: #dfdfdf12;
    border-radius: 10px;
    transition: all .2s;
}

.Product-module__wrapper:hover {
    box-shadow: 0 0 40px 0 #f1c339;
  	-moz-transform: scale(1.07);
    -webkit-transform: scale(1.07);
    -o-transform: scale(1.07);
    transform: scale(1.07);
}

.Product-module__wrapper:hover .Product-module__name {
    opacity: 1;
    background: linear-gradient(to right,#f90 0,#f1c339 100%);
    padding: 1px 10px;
    backface-visibility: hidden;
    border-radius: 0px 0px 10px 10px;
}

.Product-module__name {
	font-size: 14px;
    text-align: center;
  	text-shadow: 0 0 8px #000;
    transition: all .4s;
}

.Product-module__price {
	background: rgba(255,255,255,.15);
}

.Product-module__discount {
	background: linear-gradient(to right,#f90 0,#f1c339 100%);
    color: #fff;
    text-shadow: 0 0 5px #08c;
    transform: rotate(45deg) translateY(-30%) translateX(25%);
    padding: 0 20%;
}
/* ТОВАР */

/* ФУТЕР */

.ShopFooter-module__link {
	color: #cda640;
  	text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
}

.ShopFooter-module__link:hover {
	color: #cda640;
}
.ShopFooter-module__link:focus {
	color: #cda640;
}

.DesktopCopyright-module__wrapper {
	font-size: 14px;
    background: var(--bg-color-900)!important;
    border-radius: 0 10px 0 0!important;
  	padding: 7px!important;
    left: 0px!important;
  	bottom: 0px!important;
}

.DesktopCopyright-module__link {
	color: #cda640;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
}

/* ФУТЕР */


/* РУЛЕТКА */
.ProductModal-module__header {
    font-size: 26px;
    font-weight: bold;
  	text-transform: uppercase;
  	color: #bbb;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ProductModal-module__roulette {
	background: #262626;
  	border-radius: 20px;
}

.ProductModal-module__roulette .boxBody {
 	background: #262626;
}

.ProductModal-module__roulette .boxHeader {
 	background: #262626;
  	border-radius: 20px;
}

.ProductModal-module__roulette .boxFooter {
 	background: #262626;
  	border-radius: 20px;
}

.productModalContainsTitle {
  	display: none;
}

.RouletteContent-module__lineWrapper {
 	background: #262626;
  	-webkit-mask-image: linear-gradient(to left,rgba(255,255,255,0) 5%,#000 35%,#000 65%,rgba(255,255,255,0) 95%);
  	margin-bottom: 15px;
}

.RouletteContent-module__triangle.RouletteContent-module__bottom {
    display: none;
}
.ProductModal-module__roulette .TotalSum-module__label {
    display: none;
}

.RouletteContent-module__triangle.RouletteContent-module__top {
	border-left: 18px solid transparent;
    border-right: 18px solid transparent;
  	border-top: 20px solid #bbb;
  	animation-name: bounce-2;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.RouletteContent-module__line {
	margin-left: -61px;
}

.RouletteContent-module__rouletteItem {
	background: transparent;
}

.RouletteContent-module__rouletteItemImg {
	width: 240px;
    height: 240px;
    padding: 25px;
    overflow: hidden;
    border-radius: 35px;
    background: #333;
    transform: scale(0.9);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  
}

.productModalContainsItem {
	border-radius: 10px;
  	background: rgba(255,255,255,.08);
}

.RouletteContent-module__rouletteItemInfo {
	font-size: 16px;
  	color: #e8e8e8;
}

.productModalItemName {
	font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    color: #e8e8e8;
}
.productModalItemCount {
	font-size: 13px;
    line-height: 18px;
    color: var(--greyple);
}

.TotalSum-module__inputWrapper {
	border-radius: 15px;
  	color: rgba(255,255,255,.7);
}
.TotalSum-module__input {
	background: rgba(255,255,255,.04);
}
.TotalSum-module__currency {
	background: rgba(255,255,255,.08);
}

.Button-module__btn.Button-module__gray {
    border-radius: 15px;
    border: 1px solid #20202000;
    color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.1);
}

.Button-module__btn.Button-module__accent {
	color: #fff;
  	border-radius: 15px;
    border: 1px solid #f6b324;
    background-color: #f8ad1b;
}
.Button-module__btn.Button-module__accent:hover {
	transition: all .3s ease;
    color: #383838;
    background-color: #f90;
    border-color: #f90;
}
.productModalGiveText {
	color: #e57373;
}


@keyframes bounce-2 {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(-10px)
    }

    100% {
        transform: translateY(0)
    }
}
/* РУЛЕТКА */

/* НАБОРЫ */

.ProductModal-module__set .boxHeader,
.ProductModal-module__set .boxBody,
.ProductModal-module__set .boxFooter {
 	background: transparent;
}

.ProductModal-module__set .productModalDescription {
	padding: 0px 0px;
    margin: 5px 0;
    border-radius: 2px;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: #262626;
}

.KitContent-module__containsItems {
	grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
}

.KitContent-module__containsItem {
	color: rgba(255,255,255,.7);
  	margin: -8px 2px 8px;
    position: relative;
    background: #333;
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    transform: rotate(0deg);
    transition: all 0.3s;
    box-shadow: unset;
}

.KitContent-module__containsItem:hover {
  	-moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
}

.KitContent-module__containsItem .KitContent-module__itemName {
	background: transparent;
  	font-weight: bold;
    font-size: 17px;
    text-align: center;
    text-shadow: 0 0 4px rgba(0,0,0,.4);
    text-overflow: ellipsis;
}

.KitContent-module__containsItem .KitContent-module__itemCount {
	text-align: end;
    background: unset;
    bottom: 8px;
    right: 10px;
    border-radius: 10px;
    font-weight: bold;
    z-index: 1;
    color: rgba(255,255,255,.7);
}

.KitContent-module__containsItem .KitContent-module__itemImg {
	padding: 10px;
}

.CountSelector-module__inputWrapper .CountSelector-module__changeCountBtn {
	background: rgba(255,255,255,.08);
  	border: none;
}

.CountSelector-module__inputWrapper .CountSelector-module__changeCountBtn:hover {
	background: #41414140;
}

.CountSelector-module__inputWrapper {
	border-radius: 15px;
}

.CountSelector-module__inputWrapper .CountSelector-module__input {
	background: rgba(255,255,255,.04);
}

/* НАБОРЫ */

/* МОДАЛКА ГС */

.ModalLayout-module__modal {
  	box-shadow: 0 0 100px #f1c339;
  	border-radius: 20px;
   	background: #262626;
}
/* МОДАЛКА ГС */

/* МОДАЛКА ПОПОЛНЕНИЯ БАЛАНСА */
.PlayerBalance-module__modal {
    width: 320px;
}

.PlayerBalance-module__modal .PlayerBalanceModal-module__header {
    justify-content: center;
}

.PlayerBalance-module__modal .boxHeader {
 	background: #262626;
  	border-radius: 20px;
}

.PlayerBalance-module__modal .boxBody {
 	background: #262626;
}

.PlayerBalance-module__modal .boxFooter {
 	background: #262626;
  	border-radius: 20px;
}

.PlayerBalanceModal-module__inputWrapper {
	border-radius: 10px;
  	background: rgba(255,255,255,.04);
}
.PlayerBalanceModal-module__currency {
	background: rgba(255,255,255,.08);
}

.PlayerBalance-module__modal .Button-module__accent {
	background: #212121;
  	border-color: #212121;
  	border-radius: 10px;
}

.PlayerBalance-module__modal .Button-module__accent:hover {
	transition: all .3s ease;
    color: #383838;
    background-color: #f90;
    border-color: #f90;
}
/* МОДАЛКА ПОПОЛНЕНИЯ БАЛАНСА */

/* ВИДЖЕТ СТАЙЛ */

.grid {
    grid-template-columns: repeat(2, 240px);
    grid-gap: 32px;
    margin-top: 30px;
    position: relative;
    z-index: 1;
}

.card {
    background-color: var(--background-color);
    box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1), 0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
    padding: 10px 10px 10px 20px;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;
    transition: box-shadow 0.25s;
}
.card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background-color: var(--card-background-color);
}
.card .icon {
    z-index: 2;
    position: relative;
    display: table;
    padding: 8px;
}
.card .icon::after {
    content: "";
    position: absolute;
    inset: 1.5px;
    border-radius: 10px;
    background-color: var(--card-icon-background-color);
    border: 1px solid var(--card-icon-border-color);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    transition: background-color 0.25s, border-color 0.25s;
}
.card .icon svg {
    position: relative;
    z-index: 1;
    display: block;
    width: 24px;
    height: 24px;
    transform: translateZ(0);
    color: var(--card-icon-color);
    transition: color 0.25s;
}
.card h4 {
    z-index: 2;
    position: relative;
    margin: 12px 0 4px 0;
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 2;
    color: var(--card-label-color);
}
.card p {
    z-index: 2;
    position: relative;
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--text-color);
}
.card .shine {
    border-radius: inherit;
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s;
}
.card .shine:before {
    content: "";
    width: 150%;
    padding-bottom: 150%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 55%;
    filter: blur(35px);
    opacity: var(--card-shine-opacity);
    transform: translateX(-50%);
    background-image: var(--card-shine-gradient);
}
.card .background {
    border-radius: inherit;
    position: absolute;
    inset: 0;
    overflow: hidden;
    -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
    mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
}
.card .background .tiles {
    opacity: 0;
    transition: opacity 0.25s;
}
.card .background .tiles .tile {
    position: absolute;
    background-color: var(--card-tile-color);
    -webkit-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    opacity: 0;
}
.card .background .tiles .tile.tile-4, .card .background .tiles .tile.tile-6, .card .background .tiles .tile.tile-10 {
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
}
.card .background .tiles .tile.tile-3, .card .background .tiles .tile.tile-5, .card .background .tiles .tile.tile-8 {
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
}
.card .background .tiles .tile.tile-2, .card .background .tiles .tile.tile-9 {
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
}
.card .background .tiles .tile.tile-1 {
    top: 0;
    left: 0;
    height: 10%;
    width: 22.5%;
}
.card .background .tiles .tile.tile-2 {
    top: 0;
    left: 22.5%;
    height: 10%;
    width: 27.5%;
}
.card .background .tiles .tile.tile-3 {
    top: 0;
    left: 50%;
    height: 10%;
    width: 27.5%;
}
.card .background .tiles .tile.tile-4 {
    top: 0;
    left: 77.5%;
    height: 10%;
    width: 22.5%;
}
.card .background .tiles .tile.tile-5 {
    top: 10%;
    left: 0;
    height: 22.5%;
    width: 22.5%;
}
.card .background .tiles .tile.tile-6 {
    top: 10%;
    left: 22.5%;
    height: 22.5%;
    width: 27.5%;
}
.card .background .tiles .tile.tile-7 {
    top: 10%;
    left: 50%;
    height: 22.5%;
    width: 27.5%;
}
.card .background .tiles .tile.tile-8 {
    top: 10%;
    left: 77.5%;
    height: 22.5%;
    width: 22.5%;
}
.card .background .tiles .tile.tile-9 {
    top: 32.5%;
    left: 50%;
    height: 22.5%;
    width: 27.5%;
}
.card .background .tiles .tile.tile-10 {
    top: 32.5%;
    left: 77.5%;
    height: 22.5%;
    width: 22.5%;
}
@-webkit-keyframes tile {
    0%, 12.5%, 100% {
        opacity: 1;
    }
    25%, 82.5% {
        opacity: 0;
    }
}
@keyframes tile {
    0%, 12.5%, 100% {
        opacity: 1;
    }
    25%, 82.5% {
        opacity: 0;
    }
}
.card .background .line {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.35s;
}
.card .background .line:before, .card .background .line:after {
    content: "";
    position: absolute;
    background-color: var(--card-line-color);
    transition: transform 0.35s;
}
.card .background .line:before {
    left: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 50%;
    transform: scaleX(0);
}
.card .background .line:after {
    top: 0;
    bottom: 0;
    width: 1px;
    transform-origin: 50% 0;
    transform: scaleY(0);
}
.card .background .line.line-1:before {
    top: 10%;
}
.card .background .line.line-1:after {
    left: 22.5%;
}
.card .background .line.line-1:before, .card .background .line.line-1:after {
    transition-delay: 0.3s;
}
.card .background .line.line-2:before {
    top: 32.5%;
}
.card .background .line.line-2:after {
    left: 50%;
}
.card .background .line.line-2:before, .card .background .line.line-2:after {
    transition-delay: 0.15s;
}
.card .background .line.line-3:before {
    top: 55%;
}
.card .background .line.line-3:after {
    right: 22.5%;
}
.card:hover {
    box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1), 0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2), 0 0 0 1px var(--card-hover-border-color);
}
.card:hover .icon::after {
    background-color: var(--card-hover-icon-background-color);
}
.card:hover .icon svg {
    color: var(--card-hover-icon-color);
}
.card:hover .shine {
    opacity: 1;
    transition-duration: 0.5s;
    transition-delay: 0s;
}
.card:hover .background .tiles {
    opacity: 1;
    transition-delay: 0.25s;
}
.card:hover .background .tiles .tile {
    -webkit-animation-name: tile;
    animation-name: tile;
}
.card:hover .background .line {
    opacity: 1;
    transition-duration: 0.15s;
}
.card:hover .background .line:before {
    transform: scaleX(1);
}
.card:hover .background .line:after {
    transform: scaleY(1);
}
.card:hover .background .line.line-1:before, .card:hover .background .line.line-1:after {
    transition-delay: 0s;
}
.card:hover .background .line.line-2:before, .card:hover .background .line.line-2:after {
    transition-delay: 0.15s;
}
.card:hover .background .line.line-3:before, .card:hover .background .line.line-3:after {
    transition-delay: 0.3s;
}

.store-categories>.btn+.btn {
    margin-left: 5px;
    border-radius: 7.5px
}

.store-categories>.btn {
    margin-bottom: 5px;
    border-radius: 7.5px
}

.store-categories .btn {
    margin-right: 5px;
    margin-bottom: 5px;
    transition: all .2s ease-in-out;
    border: none!important
}

.store-categories .btn:hover {
    transform: scale(1)!important;
    color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.2)
}

.store-categories .btn.active {
    color: #fff;
    border: none;
    transform: scale(1.15);
    font-weight: 400;
    background: linear-gradient(to left,#f90 0,#f1c339 100%);
}

.store-categories .btn.active:hover {
    color: #fff!important;
    border: none;
    transform: scale(1.15)!important;
    font-weight: 400;
    background: linear-gradient(to left,#f90 0,#f1c339 100%)
}

.btn-secondary {
    color: rgba(255,255,255,.81);
    background: rgba(0,0,0,.19);
    border-color: transparent;
    outline: 0!important;
     padding: 7px 13px;
}

.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle {
    color: #fff;
    background: linear-gradient(to right,#f90 0,#f1c339 100%);
    border-color: #0a0a0a;
    -webkit-box-shadow: none;
    transform: scale(1.15)
}

.btn.btn-secondary {
    background-color: #1c1c1c;
    color: white;
    border-radius: 15px;
    font-size: 12px;
}
.btn.btn-secondary:hover {
    box-shadow: none;
    color: white;
}

@media (min-width: 768px){
.store-categories {
      flex-wrap: wrap;
      margin-bottom: 16px;
      flex-direction: row;
}}

.serverheader {
    border-radius: 15px;
    margin-bottom: 10px;
    font-size: 20px;
    margin-top: 20px;
}
.serverheader span {
    background: linear-gradient(90deg, #E82F4E, #6e2fe8, #2372d5, #2cd9aa);
    padding: 2px 12px 2px 12px;
    border-radius: 20px;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    padding: 2px 12px 2px 12px;
    border-radius: 7px;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    background: linear-gradient(90deg, #b58f54, #e8a92f, #b59c54, #e8ca2f);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    transform: translate3d(0, 0, 0);
}
.serverheader span:before {
    font-family: FontAwesome;
    content: '\f017';
    font-weight: 100;
    margin-right: 5px;
}

.kit-items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.kit-item {
    margin: 8px;
    width: 80px;
    height: 80px;
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 20%) 100%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.kit-item:hover {
    transition: transform 200ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: scale(1.1);
}
.kit-item__image {
    width: 100%;
    transform: scale(0.7);
}
.kit-item__quantity {
    top: -20px;
    position: relative;
    border-radius: 0px 0px 15px 15px;
    font-size: 12px;
}

.block_by_category .kit-item {
    margin: 8px;
    width: 80px;
    height: 80px;
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 20%) 100%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.block_by_category:before {
    text-transform: uppercase;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #e9eaec;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.block_category_3:before {
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "10 часов";
}

.block_category_1:before {
    border-radius: 5px 0px 0px 5px;
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "2 часа";
}

.block_category_4:before {
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "14 часов";
}

.block_category_6:before {
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "24 часа";
}

.block_category_7:before {
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "28 часов";
}

.block_category_8:before {
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "48 часов";
} 
.block_category_9:before {
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "28 часов";
}
.block_category_10:before {
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "28 часов";
}
.block_category_5:before {
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "20 часов";
}

.block_category_2:before {
    background: linear-gradient(180deg, rgba(41,41,58,0) 0%, rgb(99 89 68 / 40%) 100%);
    content: "4 часа";
}

.block_category_10 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
    border-radius: 0px 20px 20px 0px;
}
.block_category_9 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
    border-radius: 0px 20px 20px 0px;
}
.block_category_8 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
    border-radius: 0px 20px 20px 0px;
  
}

.block_category_7 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
    border-radius: 0px 20px 20px 0px;
}

.block_category_5 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
}

.block_category_6 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
}

.block_category_4 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
}

.block_category_3 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
}

.block_category_2 {
    background: linear-gradient(180deg, #1c1d18 0%, #2d261a 100%);
}


/* ВИДЖЕТ СТАЙЛ */

/* ПРОФИЛЬ */

.ProfileContent-module__infoLineValue.ProfileContent-module__steamid {
	color: #cda640;
}

.ProfileContent-module__infoLineValue.ProfileContent-module__steamid:hover {
	color: #f8ad1b;
}

.ProfileNav-module__wrapper .ProfileNav-module__logOut {
	border: 1px solid #d9534f;
    background-color: #d9534f;

}

.ProfileNav-module__wrapper .ProfileNav-module__logOut:hover {
	color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
}

.BasketSearch-module__wrapper {
    border-radius: 15px;
}
.BasketSearch-module__iconWrapper {
    background: rgba(255,255,255,.08);
}
.BasketTable-module__tableTitle {
	color: #f7f6f6;
}
.BasketTable-module__tableLine, .BasketTable-module__tableHeader {
	padding: 9px 12px;
  	border-bottom: 1px solid #292c2e;
}
.BasketTable-module__tableLine:nth-child(2n-1) {
    background-color: transparent;
}

.HistorySearch-module__wrapper {
    border-radius: 15px;
}
.HistorySearch-module__iconWrapper {
    background: rgba(255,255,255,.08);
}
.HistoryTable-module__tableTitle {
	color: #f7f6f6;
}
.HistoryTable-module__tableLine:nth-child(2n-1) {
    background-color: transparent;
}
.HistoryTable-module__tableLine, .HistoryTable-module__tableHeader {
	padding: 9px 12px;
  	border-bottom: 1px solid #292c2e;
}
.Pagination-module__page:hover, .Pagination-module__page.Pagination-module__active, .Pagination-module__page:focus {
	color: #cda640;
}

/* ПРОФИЛЬ */

.modal-open .modal {
    overflow-x: hidden;
    background-size: cover
}

.customModalContent {
    width: 900px;
	background: linear-gradient(180deg, #1d1b18 0%, #2d261a 100%);
    color: white;
    box-shadow: 0 0 100px #f1c339;
  	border-radius: 20px;
    padding: 10px;
}

.customModalContent .boxHeader {
  	background: transparent;
    text-align: center;
    font-size: 40px;
    margin-bottom: 15px;
}

.customModalPosition {
	backdrop-filter: blur(5px);
}

.customModalContent .boxBody {
	background: transparent;
  	position: relative;
    padding: 15px;
  	font-size: 14px;
    line-height: 1.42857143;
}
.customModalContent .boxFooter {
	background: transparent;
}

.xbox_custom_rules p {
    margin: 0 0 10px;
}

.xbox_custom_rules ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-left: 0;
}

.xbox_custom_rules li {
    margin-bottom: 10px;
}

.unbancolor {
   color: #cda640;
}

.modal-open {
    overflow: hidden;
}

.gs-loader {
	background-color: transparent;
	backdrop-filter: blur(5px);
}

.gs-loader__spinner {
	margin-top: 0;
    width: 100px;
    height: 100px;
    background: url(https://i.postimg.cc/wBgk0XZn/SQ0a4en.png) no-repeat;
  	border: none;
  	animation: float 1s ease-in-out infinite;

}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-30px);
  }
  100% {
    transform: translatey(0px);
  }
}


.productModalDescription .container-oplata {
    right: -21110px;
    display: -webkit-inline-box;
    margin-bottom: 5px;
    padding: 5px;
    height: 50px;
    width: 100%;
    border-radius: 12px;
    background: #333;
    text-align: initial;
    transition: all 0.2s ease-out;
    cursor: pointer;
    transform: scale(1);
}

.productModalDescription .container-oplata:last-child {
    right: -11120px;
    margin-bottom: 0px !important
}

.productModalDescription .container-oplata:hover {
    transform: scale(0.95)
}

.productModalDescription .container-oplata {
    display: flex;
}

.productModalDescription .icon-user-oplata {
    width: 30px !important;
    height: 30px !important;
    border-radius: 0px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin: 5px;
    margin-right: 10px !important
}

.productModalDescription .textContainer-oplata {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-evenly;
    overflow: hidden
}

.priv_discount {
    position: absolute;
    background: #1b1b1b;
    font-size: 14px;
    border-radius: 0px 10px 0px 10px;
    top: 0px;
    padding: 0px 8px 0px 10px;
    right: 0px;
    opacity: 1;
    font-weight: 400;
    z-index: 3;
    color: white;
    cursor: help;
}

.priv_discount2 {
    position: absolute;
    background: rgba(33, 33, 33, 0.5);
    font-size: 14px;
    border-radius: 0px 10px 0px 10px;
    top: 0px;
    padding: 0px 8px 0px 10px;
    right: 0px;
    opacity: 1;
    font-weight: 400;
    z-index: 3;
    color: white;
    cursor: help
}

.container-oplata .tooltiptext1 {
    visibility: hidden;
    width: 170px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    left: 105%;
    opacity: 0;
    transition: opacity 220ms ease-out
}

.container-oplata .tooltiptext1::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent
}

.container-oplata:hover .tooltiptext1 {
    visibility: visible;
    opacity: 1
}

@media only screen and (max-width: 767px) {
  .container-oplata .tooltiptext1 {
  	left: 24%;
    top: -160%;
  }
  
   .container-oplata .tooltiptext1::after {
      content: "";
      position: absolute;
      top: 105%;
      right: 50%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
	}
}

.ProductModal-module__dropdown .boxHeader,
.ProductModal-module__dropdown .boxBody,
.ProductModal-module__dropdown .boxFooter,
.ProductModal-module__dropdown .productModalDescription {
	background: transparent;
}


/* ТОП КАРТОЧКА ТОВАРА */

@media (min-width: 768px){
 
.ProductModal-module__dropdown {
  	width: 590px;
}

.ProductModal-module__dropdown .boxBody {
    display: flex;
	flex-wrap: wrap;
    justify-content: center;
  	align-items: flex-start;
}

.ProductModal-module__dropdown .productModalImg {
    width: 40%;
    height: 40%;
  	margin: auto;
    order: 0;
}

.ProductModal-module__dropdown .productModalDescription {
	order: 1;
  	width: 60%;
}

.ProductModal-module__dropdown .SelectContent-module__selectorWrapper {
	min-width: 40%;
  	order: 2;
  	padding-top: 10px;
}

.ProductModal-module__dropdown .ProductModal-module__form {
	order: 3;
  	width: 60%;
    padding: 10px;
}

.ProductModal-module__dropdown .productModalGiveText {
	order: 4;
}}

.ProductModal-module__dropdown .dropDownCurrentItem:hover, .dropDownCurrentItem:focus {
	outline: none;
}
.ProductModal-module__dropdown .dropDownCurrentItem {
	outline: none;
  	background-color: rgba(255,255,255,.04);
  	border-radius: 15px;
}

.ProductModal-module__dropdown .SelectContent-module__selectorWrapper .dropDownItem:hover, .dropDownItem:focus{
	background: linear-gradient(to left,#f90 0,#f1c339 100%);
    color: #292b2c;
}

.ProductModal-module__dropdown .SelectContent-module__selectorWrapper .dropDownList {
	background: #2f2f2f;
    border-radius: 15px;
  	border: 1px solid #535353;
}
/* ТОП КАРТОЧКА ТОВАРА */


.boxHeader.Shop-module__header, .boxHeader.MonitoringWidget-module__header {
	display: none;
}

.MonitoringWidget-module__body {
	border-radius: 15px;
}

.MonitoringServer-module__progressBar {
	background-image: linear-gradient(90deg,rgb(248 174 29) var(--online-players),#f58535 var(--online-players),#f58535 var(--joining-players),#f2564d var(--joining-players),#f2564d var(--queued-players),transparent var(--queued-players));
}

.MonitoringServer-module__progressBarAnim, .MonitoringServer-module__btns {
	display: none;
}

.MonitoringServer-module__progressBarWrapper {
	height: 20px;
  	border-radius: 5px;
  	background-color: rgb(223 223 223 / 7%);
}

.MonitoringServer-module__name {
	font-size: 15px;
}

.MonitoringServer-module__progressInfo {
	border-radius: 10px;
    background-color: #262626;
    border: 1px solid #f8ae1d;
}

.MonitoringServer-module__progressInfo:before {
	border-color: #f8ae1d transparent transparent transparent;
}

.MonitoringServer-module__wrapper+.MonitoringServer-module__wrapper {
    margin-top: 10px;
}

.Widgets-module__widgetWrapper .boxFooter {
	display: none;
}


.xbox.xbox_monitoring6 {
    background: #49494936;
    border-radius: 10px;
    margin-top: 8px;
}
.xbox {
    background: rgba(19,29,13,0);
    border-radius: 8px;
    box-shadow: 0 1px 1px transparent;
    margin-bottom: 0;
}
.xbox_monitoring6 {
    margin-bottom: 10px;
    background: #282828de;
    padding: 15px;
    border-radius: 25px;
    padding-top: 5px;
    padding-right: 23px;
    padding-bottom: 5px;
    padding-left: 23px;
}
.xbox {
    background: rgba(212,186,173,0);
    color: #fff;
}

.menu-vk {
    margin: -10px;
    color: #fff;
    padding: 0.5rem 0.5rem;
    background-color: #5181b8;
    transition: all .1s;
    border-radius: 10px;
}
#xbox_button {
    margin: 1px auto 0;
    width: 50px;
    height: 50px;
}
.menu-discord {
    color: #fff;
    margin: 10px;
    padding: 0.5rem 0.5rem;
    background-color: #7289da;
    transition: all .1s;
    border-radius: 10px;
}

.fa-vk:before {
    content: "\f189";
}


.DL-Social-box {
	display: flex;
    justify-content: space-around;
    align-items: center;
  	border-radius: 15px;
  	padding: 20px 15px 20px 15px;
}

.DL-Social-link {
	width: 40%;
    display: flex;
    justify-content: center;
  	padding: 0.2rem 0.2rem;
  	border-radius: 10px;
}

.VK {
    background-color: #5181b8;
    transition: all 0.2s;
}

.VK:hover {
	transform: scale(1.13);
    background-color: #5b88bd;
}

.DS {
	background-color: #7289da;
  	transition: all 0.2s;
}

.DS:hover {
	transform: scale(1.13);
    background-color: #677bc4;
}


.PlayerMenuMobile-module__menu .PlayerMenuMobile-module__header,
.PlayerMenuMobile-module__menu .PlayerMenuMobile-module__body{
	background-color: #262626;
}