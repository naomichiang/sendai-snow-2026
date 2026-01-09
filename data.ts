
import { DayPlan, WeatherDay } from './types';

export const ITINERARY_DATA: DayPlan[] = [
  {
    day: 1,
    date: '2026/01/16',
    location: '仙台逛街日',
    spots: [
      {
        time: '14:25',
        category: '交通',
        name: '抵達仙台機場 ✈️',
        desc: '下飛機後 2 樓連通「Access Line」，預估 15:30-16:00 到大廳',
        // mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sendai+Airport',
        emoji: '🚶',
        highlightText: '找 Access Line 指標'
      },
      {
        time: '15:10',
        category: '交通',
        name: '機場鐵道 ➔ 仙台車站',
        desc: '直接開進仙台的市區，一出站就是滿滿的牛舌香味和熱鬧的百貨公司',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Sendai+Airport&destination=Sendai+Station&travelmode=transit',
        emoji: '🚄',
        highlightText: '25分鐘直達市中心'
      },
      {
        category: '飯店',
        name: '仙台東大都會大飯店',
        desc: '位置極佳！就在車站東口上方。check-in 後直接下樓開始玩',
        tags: ['必拍'],
        mapUrl: 'https://maps.app.goo.gl/Gdbrawh7DpkqD91F9',
        emoji: '🏨',
        highlightText: '車站共構，連住兩晚'
      },
      {
        category: '購物',
        name: 'Montbell 仙台店',
        desc: '日本戶外品牌，各種機能型發熱衣 and 防風手套，是雪地活動的神隊友',
        tags: ['必買'],
        mapUrl: 'https://maps.app.goo.gl/Xtq5xVwCjkoAv1zh9',
        emoji: '🧤',
        highlightText: '雪地裝備補給站'
      },
      {
        category: '食物',
        name: '牛舌晚餐',
        desc: '仙台車站旁邊的碳烤牛舌店很多家',
        tags: ['必吃'],
        mapUrl: 'https://maps.app.goo.gl/Md17Mpkyjznk1L9G7',
        emoji: '🍽️',
        highlightText: '仙台名物-牛舌'
      },
      {
        category: '購物',
        name: 'Yodobashi 仙台',
        desc: 'ReFa吹風機、食物調理機',
        tags: ['必買'],
        mapUrl: 'https://maps.app.goo.gl/Md17Mpkyjznk1L9G7',
        emoji: '💨',
        highlightText: '這棟 5F 有3COINS+plus'
      },
      {
        category: '購物',
        name: '3COINS+plus',
        desc: '5F 煮蛋器，3COINS+plus ヨドバシ仙台店',
        tags: ['必買'],
        mapUrl: 'https://maps.app.goo.gl/7atYGesoNCt4dYcb9',
      },
    ],
    clothingAdvice: '長袖內衣 + 毛衣 + 防風外套',
    snowTip: '機場到市區多為室內通道，仙台市區積雪通常不深。'
  },
  {
    day: 2,
    date: '2026/01/17',
    location: '狐狸村 - 仙台',
    spots: [
      {
        time: '09:00',
        category: '食物',
        name: '出門！早餐覓食or超商解決',
        desc: '可以買上新幹線吃?但路程很短其實',
      },
      {
        time: '09:40',
        category: '交通',
        name: 'JR 新幹線 🚄 往白石藏王',
        desc: '去程 新幹線 9:40 - 9:55 + 巴士 10:15 - 10:49',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Sendai+Station&destination=Shiroishi-Zao+Station&travelmode=transit',
        emoji: '🚅',
        highlightText: '極速15分鐘抵達白石'
      },
      {
        time: '10:15',
        category: '交通',
        name: '巴士/計程車 ➔ 狐狸村',
        desc: '10:15-10:49，30分鐘車程',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Shiroishi-Zao+Station&destination=Zao+Fox+Village',
        emoji: '🚕',
        highlightText: '轉乘交通工具'
      },
      {
        category: '景點',
        name: '藏王狐狸村🦊',
        desc: '上百隻肥嘟嘟的狐狸在雪地滾來滾去！入場費￥1500/人，那個毛絨絨的觸感～',
        tags: ['必拍'],
        mapUrl: 'https://maps.app.goo.gl/yqQxMuHcFvF5oygw5',
        emoji: '🦊',
        highlightText: '抱狐狸體驗必排隊'
      },
      {
        time: '13:51',
        category: '交通',
        name: '🚅 新幹線 ➔ 返回仙台',
        desc: '回程：計程車 + 新幹線 13:51 - 14:04 或 15:51 - 16:05',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Shiroishi-Zao+Station&destination=Sendai+Station&travelmode=transit',
      },
      {
        category: '食物',
        name: '三陸牡蠣市場 Uminookite',
        desc: '以鮮甜肥美的牡蠣著稱，現開現吃的口感完全沒腥味，配上一杯在地清酒簡直是天堂',
        tags: ['必吃'],
        mapUrl: 'https://maps.app.goo.gl/LMkfn3rPG4WXqwpq6',
        emoji: '🦪',
        highlightText: '現開肥美牡蠣必吃'
      },
      {
        category: '購物',
        name: 'S-PAL 仙台本館百貨',
        desc: 'FREAKS STORE 在東館3F,GU跟Uniqlo在5F',
        tags: ['必買'],
        mapUrl: 'https://maps.app.goo.gl/G7ARqdHbbJWP7kDa9',
        emoji: '🍡',
        highlightText: '仙台名物＿各種毛豆口味',
      },
      {
        category: '購物',
        name: '仙台PARCO本館',
        desc: '8樓有Chiikawa Land、Sanrio，3F有寶可夢中心',
        tags: ['必買'],
        mapUrl: 'https://maps.app.goo.gl/7uoUdatAbBQJ7jDk7',
        emoji: '🐴',
        highlightText: '綺綺許願馬年限定版'
      },
      {
        category: '景點',
        name: '宇真一家抵達仙台',
        desc: '接近晚上的星宇航班抵達仙台～',
        emoji: '🍡',
        highlightText: 'YunaMM、可靠的堅果皮友相見歡',
      } 
    ],
    clothingAdvice: '厚羽絨衣 + 手套 + 止滑雪靴',
    snowTip: '狐狸村地形有坡度，積雪時非常滑，強烈建議穿雪靴。'
  },
  {
    day: 3,
    date: '2026/01/18',
    location: '山形 - 銀山溫泉',
    spots: [
      {
        category: '食物',
        name: '仙台朝市',
        desc: '被譽為仙台人的廚房，齊藤熟食店、生魚片、咖啡…',
        tags: ['必吃'],
        mapUrl: 'https://maps.app.goo.gl/bsEBmhQ72AkokJ8a7',
        emoji: '🥣',
        highlightText: '海鮮丼CP值爆表'
      },
      {
        time: '10:30',
        category: '交通',
        name: '🚃 JR 仙山線 ➔ 山形',
        desc: '這是一段經典的賞雪支線。火車會經過壯麗的山谷和紅色鐵橋',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Sendai+Station&destination=Yamagata+Station&travelmode=transit',
        emoji: '🚃',
        highlightText: 'JR仙山線 (1.5hr) 或 22號山交巴士(1hr)'
      },
      {
        time: '12:45',
        category: '交通',
        name: '🚅JR 新幹線 ➔ 大石田',
        desc: '1,970円，轉乘新幹線更舒適。在大石田出站後，會看到古色古香的木造建築，這裡就是通往銀山的門戶',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Yamagata+Station&destination=Oishida+Station&travelmode=transit',
        emoji: '🚉',
        highlightText: '轉乘大石田木造車站'
      },
      {
        time: '13:30',
        category: '交通',
        name: '🚐 飯店接駁車',
        desc: '接駁：13:30和15:30，市營巴士：9:50/12:25/12:35/14:10…(直接上車)',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Oishida+Station&destination=Ginzan+Onsen',
        emoji: '🚐',
        highlightText: '飯店免費接駁車'
      },
      {
        category: '飯店',
        name: '銀山飯店 👘 古山閣',
        desc: '就是這家跨國匯款弄好久！希望很值得',
        tags: ['必拍'],
        mapUrl: 'https://maps.app.goo.gl/YBFokW5QxatqprjPA',
        emoji: '👘',
        highlightText: '明治懷舊木雕之宿'
      },
      {
        category: '景點',
        name: '銀山溫泉街散策',
        desc: '野川豆腐屋、西塚菓子舗（めいゆう庵咖哩麵包）、布丁 酒茶房、蕎麥麵 伊豆之華',
        tags: ['必拍'],
        emoji: '🏮',
        highlightText: '黃昏點燈神隱少女感'
      },
      {
        category: '食物',
        name: '溫泉飯店晚餐',
        desc: '溫泉飯店有提供晚餐，連住兩晚應該會不一樣',
        emoji: '🏮',
        highlightText: '一泊二食方案'
      },
    ],
    clothingAdvice: '保暖發熱衣 + 圍巾 + 毛帽',
    snowTip: '銀山溫泉街多水窪，防水鞋款是必備。'
  },
  {
    day: 4,
    date: '2026/01/19',
    location: '藏王溫泉 🌲',
    spots: [
      {
        time: '08:30',
        category: '食物',
        name: '古山閣飯店＿早餐',
        desc: '銀山溫泉這邊飯店沒有一起住~',
      },
      {
        time: '09:40',
        category: '交通',
        name: '飯店退房，接駁車 ➔ 大石田',
        desc: '9:40 接駁 或 10:35尾花澤巴士 (30-40min)',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Ginzan+Onsen&destination=Oishida+Station',
        emoji: '👋',
        highlightText: '晨間銀山最後巡禮'
      },
      {
        time: '11:27',
        category: '交通',
        name: '🚃 JR 大石田 ➔ 山形',
        desc: '列車名稱：Tsubasa 140，大人5人、兒童1人，16號車 13、14番、15號 C+D席',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Oishida+Station&destination=Yamagata+Station&travelmode=transit',
        emoji: '📸',
        highlightText: '新幹線 11:27 - 12:03，大人 ¥8,850，兒童 ¥880'
      },
      {
        time: '13:00',
        category: '交通',
        name: '🚌 山交巴士 ➔ 藏王溫泉',
        desc: 'Z90號巴士 (40min)，現場機器買票或西瓜卡，1小時1班，可能加開',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Yamagata+Station&destination=Zao+Onsen+Bus+Terminal',
        emoji: '🚌',
        highlightText: '爬坡進入樹冰國度'
      },
      {
        category: '飯店',
        name: 'Checkin放行李，五感之湯つるや',
        desc: '這家飯店的露天溫泉非常有特色。晚上泡湯時雪花落在頭上的感覺非常療癒',
        mapUrl: 'https://maps.app.goo.gl/sKMzvqsxUmM6Dkeu6',
        emoji: '♨️',
        highlightText: '連住兩晚，雪中露天溫泉最高'
      },
      {
        category: '食物',
        name: '🍔 藏王Lawson或山頂餐廳',
        desc: '山頂餐廳選擇多，但有機會鹹食賣光XD',
      },
      {
        category: '景點',
        name: '🚠 藏王纜車 ➔ 樹冰',
        desc: '前幾天先確認天氣並且當天上山前看即時影像，像巨型怪獸般的樹冰，藏王纜車山麓站先搭到樹冰高原站－第二條纜車前往地藏山頂站？',
        tags: ['必拍'],
        mapUrl: 'https://maps.app.goo.gl/aLwyShnX8zndEBnK8',
        emoji: '🚠',
        highlightText: '搶14:00或14:30上山的優先套票，末班車16:30'
      }
    ],
    clothingAdvice: '最高等級防寒羽絨 + 暖暖包',
    snowTip: '纜車山頂溫度可能低至 -15°C，臉部保暖也要注意。'
  },
  {
    day: 5,
    date: '2026/01/20',
    location: '滑雪日',
    spots: [
      {
        time: '07:30',
        category: '食物',
        name: '飯店早餐',
        desc: '早餐時間有點趕，趕出門滑雪課，宇真一家這天會退房回仙台',
        emoji: '👋',
        highlightText: '皮友掰掰'
      },
      {
        time: '08:30',
        category: '交通',
        name: '🚐 接駁車 ➔ Liza World',
        desc: '早起出發！這個滑雪場的人相對少，雪質蓬鬆，適合我們練習。',
        mapUrl: 'https://maps.app.goo.gl/L9Z9Z9Z9',
        emoji: '🏂',
        highlightText: '前往極品粉雪天堂'
      },
      {
        time: '09:30',
        category: '活動',
        name: '🏂 菜鳥級單板滑雪課',
        desc: '教練會帶我們從基礎滑行開始，在雪地裡翻滾也是一種樂趣！課程: 9:30 - 12:30，餐廳: Order 10am〜4pm',
        tags: ['必拍'],
        emoji: '🎓',
        highlightText: '下午可以留在滑雪場練習或回藏王溫泉街＆飯店'
      },
      {
        category: '活動',
        name: '♨️ 藏王溫泉街散策',
        desc: '下午媽媽累了要怎麼回山腳？這裡很多點足湯點，泡個幾分鐘就能讓腿部壓力瞬間消失',
        mapUrl: 'https://maps.app.goo.gl/6xqUHRxfw57ZoVYy9',
        emoji: '🦶',
        highlightText: '足湯散策療癒雙腿'
      },
      {
        category: '食物',
        name: '飯店晚餐 🥩 山形牛',
        desc: '今晚的主角是山形牛壽喜燒。油脂豐富的肉片刷上蛋汁，是一整天運動後最好的慰勞',
        tags: ['必吃'],
        emoji: '🥩',
        highlightText: '山形牛油脂超豐富'
      }
    ],
    clothingAdvice: '專業滑雪服組 + 護具',
    snowTip: '滑雪場風大，建議佩戴護目鏡以保護眼睛'
  },
  {
    day: 6,
    date: '2026/01/21',
    location: '山形 - 仙台',
    spots: [
      {
        category: '交通',
        name: '🚌 藏王 ➔ 山形車站',
        desc: '(備案) 如果直接回仙台，有直達巴士(15:30和16:30出發，1.5hr)，但可能賣光',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Zao+Onsen&destination=Yamagata+Station',
        emoji: '🔚',
        highlightText: '告別藏王回市區'
      },
      {
        category: '購物',
        name: '山形市區逛街',
        desc: 'S-PAL 裡面有各種山形限定的櫻桃和梨子點心。買幾個分送朋友，一定會大受好評',
        tags: ['必買'],
        emoji: '🍒',
        highlightText: '米澤牛 登起波 山形店'
      },
      {
        category: '交通',
        name: 'JR 山形 ➔ 仙台',
        desc: '回程可以挑選有大觀景窗的列車，再次回味東北的純白大地',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Yamagata+Station&destination=Sendai+Station&travelmode=transit',
        emoji: '🚋',
        highlightText: '大觀景窗回味雪景'
      },
      {
        category: '購物',
        name: '仙台市區最後採買',
        desc: '藥妝店、電器行，還有那些還沒買齊的小廢物，今晚就是最後衝刺的時間',
        tags: ['必買'],
        emoji: '🛍️',
        highlightText: '藥妝店最後總衝刺'
      }
    ],
    clothingAdvice: '厚外套即可，市區室內暖氣強',
    snowTip: '仙台地面可能結冰，走路要像企鵝一樣小步'
  },
  {
    day: 7,
    date: '2026/01/22',
    location: '仙台 - 回程',
    spots: [
      {
        category: '購物',
        name: '仙台車站 ➔ 悠閒散步',
        desc: '最後一個上午。我們可以在車站附近的商店街慢慢走，買最後一隻毛豆奶昔，帶著滿足的心情前往機場',
        tags: ['必買'],
        emoji: '🥤',
        highlightText: '毛豆奶昔最後一喝'
      },
      {
        category: '購物',
        name: 'AER 百貨',
        desc: '最後一個上午。我們可以在車站附近的商店街慢慢走，買最後一隻毛豆奶昔，帶著滿足的心情前往機場',
        tags: ['必買'],
        emoji: '🌃',
        highlightText: '31F免費觀景展望台 10:00〜20:00'
      },
      {
        category: '食物',
        name: '阿部蒲鉾店 本店',
        desc: '仙台商店街的特色魚板小時',
        emoji: '🏮',
        highlightText: '炸葫蘆魚板'
      },
      {
        time: '14:30',
        category: '交通',
        name: '仙台車站 ➔ 機場',
        desc: '該買的都買好了嗎？',
        mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Sendai+Station&destination=Sendai+Airport&travelmode=transit',
        emoji: '✈️',
        highlightText: '提早出發防雪路延誤'
      },
      {
        time: '16:15',
        category: '交通',
        name: '返程航班 ✈️',
        desc: '回家囉！預計 16:15 起飛。',
        emoji: '🏠',
        highlightText: '帶著滿滿回憶回家'
      }
    ],
    clothingAdvice: '穿脫方便的大衣，應對機場溫度',
    snowTip: '雪季機場線偶爾有延誤，建議比平時提早 30 分鐘出發'
  }
];

export const WEATHER_DATA: WeatherDay[] = [
  { date: '01/16', temp: '-2°C / 4°C', snowChance: '20%', realFeel: '-1°C', snowDepth: '5cm', clothing: '防風大衣', location: '仙台' },
  { date: '01/17', temp: '-5°C / 1°C', snowChance: '40%', realFeel: '-6°C', snowDepth: '25cm', clothing: '厚羽絨 + 雪靴', location: '白石藏王' },
  { date: '01/18', temp: '-7°C / -2°C', snowChance: '80%', realFeel: '-10°C', snowDepth: '50cm', clothing: '長版大衣 + 圍巾', location: '銀山' },
  { date: '01/19', temp: '-10°C / -4°C', snowChance: '90%', realFeel: '-15°C', snowDepth: '80cm', clothing: '滑雪服 + 暖暖包', location: '藏王' },
  { date: '01/20', temp: '-8°C / -3°C', snowChance: '30%', realFeel: '-12°C', snowDepth: '75cm', clothing: '滑雪裝備', location: '滑雪場' },
  { date: '01/21', temp: '-3°C / 3°C', snowChance: '10%', realFeel: '0°C', snowDepth: '10cm', clothing: '厚外套', location: '仙台' },
  { date: '01/22', temp: '-1°C / 5°C', snowChance: '5%', realFeel: '2°C', snowDepth: '2cm', clothing: '羽絨衣', location: '機場' },
];
