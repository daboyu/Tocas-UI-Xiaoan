var Dailyxiaoan = [
    '大家好我是小安！未來有可能會改名啦～',
    '我喜歡遊玩遊戲，然後分享在YouTube上。',
    '試試台灣自製社群？ ► http://www.TeaMeow.com/',
    'Working for TeaMeow, a brand new social website (maybe) :D',
    '所以說到底為什麼是巧克力黑（或是其實這是紅色，我色盲夭壽嚴重）呢？',
    '大概是從斷惡之黑的梗開始的，. 茶葉加上巧克力（？）跟中二性質嗎？',
    '你將看見一個魔法師的日常生活，只要你能夠單身三十年，你也可以跟我一樣成為魔法師。',
    '你很機車人！',
    '早安！兄弟，你欠錢還沒還！',
    '月月，搭拉安。',
    '記得友善發言！',
    '才不管逆雷～',
    '吻仔魚，這裡充滿了很多吻仔魚。',
    '逼啪拉畢叭啦霹拉吧。',
    '我要暴怒！',
    '吃過早餐了嗎？如果沒有，還請務必嚐嚐我們的招牌：「嘉明的味道」。',
    '這是來自地獄的智障骷髏智障骷髏小喇叭手。',
    '三十公分 人人都渴望的尺寸。',
    '這是一個來自台灣的社群網站，在這裡，我們並沒有「讚」，或是「已讀」。',
    '取而代之的，是一個「星號」，你可以假裝沒看見你朋友發給你的訊息，或者——你可以按下「星號」，告訴對方你知道了。',
    '比起小明，您是否更喜歡小安？',
    '加一點 CSS3 動畫 (๑•̀ㅂ•́)و✧',
    '你以為是 Bootstrap? 不，全部都是靠伊繁星出產的 TocasUI 完成的喔！ (๑•̀ㅂ•́)و✧',
    '然後再來一點自製樣式 (๑•̀ㅂ•́)و✧',
    '在 TocasJS 完成前，先借用一下 jQuery 吧 (๑•̀ㅂ•́)و✧',
    '看到元素的時候才會有動畫，人生才不會遺憾 (๑•̀ㅂ•́)و✧',
    '最後是自己的 JavaScript (๑•̀ㅂ•́)و✧',
    '來自台灣，而且比你現在用的社群網站更自由。',
    'TeaMeow, 茶葉貓, Facebook, 社群網站, Twitter, 茶葉, 貓咪, 小安。',
    '比你現在用的社群網站更自由，而且來自台灣。',
    'Not real but feels.',
    'Bootstrap? 不，全部都是靠 TeaMeow 出產的 Tocas2 完成的喔！ (๑•̀ㅂ•́)و✧',
    'CM3D2 又更新了。',
    '幹都給你出就飽了啊，TeaMeow 根本不用做了。',
    'Moon, dalan!',
    '我好孤單，真的。',
    '可以，這很洨洨安。',
    'TEAMEOW 的開發日記，還有貓咪。',
    '高清、戶外、無碼。',
    '累死人，我希望我可以把我切一半，然後同時做兩件事。',
    '兄弟，你真的欠錢欠很兇。',
    '自從聚焦看板腦殘腦殘的，我就打算把它換掉了。',
    'Telegram 版本：https://t.me/addstickers/GirlsFrontlineSticker',
    '一個已加入魔法師預備軍的人類，傳說只要再過數十年，就能夠獲得魔法師的力量。',
    '全世界不到 0.01% 的人都在使用最好用的 Tocas UI！',
    '如果 IE 都有勇氣問你是否要成為預設瀏覽器了，你又何嘗沒有勇氣嘗試 Tocas UI 呢？',
    '前天去夏威夷旅行，怎樣？拍得不錯吧！。',
    'Tocas UI 的聊天室元件支援引用欸，真是太 Telegram 了。',
    '囉哈！',
    '始春到底是什麼？始春，絕不向日曆妥協始春，絕不向預告低頭只要 CM3D2 在手，就能夠永遠地始春始春是一種精神，一種態度一種革命，一種叛逆。於是我了解「跳票、延期、三螢幕，這就是始春。」',
    '點個怒就好了',
    '操你媽',
    '自殺',
    '覺得會被圍毆',
    '我突然覺得這句話很有道理',
    '所以我要把一些奇異的功能砍了',
];
var size = [
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive',
];
var variety = [
    'instead',
    'demon',
    'demon instead',
    'face',
    'face instead',
    'funny face',
    'funny face instead',
    'horny',
    'horny instead',
    'kemonomimi',
    'kemonomimi instead',
    'tissue',
    'spinner',
];
var varietyIcon = [
    'primary',
    'info',
    'warning',
    'positive',
    'negative',
    'inverted',
    'rainbow ',
];
var xiaoan = function() {
    this.daily = function(qty, less) {
        var daily = Dailyxiaoan[Math.floor(Math.random() * Dailyxiaoan.length)]
        var daily_qty = qty
        var daily_less = less
        if (!daily_qty) {
            // 若使用者未指定，指定預設值
            var daily_qty = '1'
        }
        if (!daily_less) {
            // 若使用者未指定，指定預設值
            var daily_less = '8700'
        }
        // 重複輸出洨安直到指定的數量
        for (i = 0; i < Number(daily_qty); i = i + 1) {
            do {
                var daily = Dailyxiaoan[Math.floor(Math.random() * Dailyxiaoan.length)];
            } while (daily.length >= daily_less)
            document.write(daily + "<br>")
        }
        //結束迴圈
    }
    this.daily_con = function(qty, less) {
        var daily = Dailyxiaoan[Math.floor(Math.random() * Dailyxiaoan.length)];
        var daily_qty = qty;
        var daily_less = less;
        if (!daily_qty) {
            // 若使用者未指定，指定預設值
            var daily_qty = '1'
        }
        if (!daily_less) {
            // 若使用者未指定，指定預設值
            var daily_less = '8700'
        }
        // 重複輸出洨安直到指定的數量
        for (i = 0; i < Number(daily_qty); i = i + 1) {
            do {
                var daily = Dailyxiaoan[Math.floor(Math.random() * Dailyxiaoan.length)];
            } while (daily.length >= daily_less)
            console.log(daily)
        }
        //結束迴圈
    }
    this.religion = function() {
        document.write('<div class="ts secondary code segment"><pre>')
        document.write('<p><code>@@   @@ @@@@@@     @@@     @@@@@@@@@@     @@@     @@@   @@</code></p>')
        document.write('<p><code> @@ @@    @@      @@ @@    @@      @@    @@ @@    @@@@  @@</code></p>')
        document.write('<p><code>  @@@     @@     @@   @@   @@      @@   @@   @@   @@ @@ @@</code></p>')
        document.write('<p><code> @@ @@    @@    @@@@@@@@@  @@      @@  @@@@@@@@@  @@  @@@@</code></p>')
        document.write('<p><code>@@   @@ @@@@@@ @@       @@ @@@@@@@@@@ @@       @@ @@   @@@</code></p>')
        document.write('<p>更多關於 Tocas Xiaoan → <a href="https://xiaoan.tocas-ui.com">xiaoan.tocas-ui.com</a></p>')
        document.write('</pre></div>')
    }
    this.religion_con = function() {
        console.log("@@   @@ @@@@@@     @@@     @@@@@@@@@@     @@@     @@@   @@")
        console.log(" @@ @@    @@      @@ @@    @@      @@    @@ @@    @@@@  @@")
        console.log("  @@@     @@     @@   @@   @@      @@   @@   @@   @@ @@ @@")
        console.log(" @@ @@    @@    @@@@@@@@@  @@      @@  @@@@@@@@@  @@  @@@@")
        console.log("@@   @@ @@@@@@ @@       @@ @@@@@@@@@@ @@       @@ @@   @@@")
        console.log("更多關於 Tocas Xiaoan → https://xiaoan.tocas-ui.com")
    }
    this.earlySpring404 = function(style) {
        document.write('<div class="ts ' + style + ' message"><div class="header">Error 404</div><p>2016 early-spring 404 not found.</p></div>')
    }
    this.earlySpring404_con = function() {
        console.error("2016 early-spring 404 not found.")
    }
    this.basic = function(style) {
        document.write('<div class="ts ' + style + ' xiaoan"></div>')
    }
}
var xiaoan = new xiaoan();

function snackbar(text, time) {
    // 確認使用者有填寫合法數字
    if (!time || isNaN(time) || time < 1) {
        var t = 1000;
    } else {
        var t = time * 1000;
    }
    var s = document.getElementById('ts_snackbar');
    var sc = document.getElementById('ts_snackbar_content');
    s.setAttribute("class", "ts snackbar active animating");
    sc.innerHTML = text;
    setTimeout(function() { s.setAttribute("class", "ts snackbar active"); }, 200);
    setTimeout(function() { s.setAttribute("class", "ts snackbar animating"); }, t - 200);
    setTimeout(function() { s.setAttribute("class", "ts snackbar"); }, t);
}
document.write('<div class="ts snackbar" id="ts_snackbar"><div class="content" id="ts_snackbar_content">未填入內容</div></div>');