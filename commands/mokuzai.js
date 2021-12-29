module.exports = {
    data: {
        name: "mokuzai",
        description: "【原神】木材の場所を教えてくれます。",
        options: [
            {
                type: "STRING",
                name: "wood-name",
                description: "木の名前",
                required: true,
                choices: [
                    { name: "杉材(すぎざい)", value: "0" },
                    { name: "垂香材(すいこうざい)", value: "1" },
                    { name: "竹材(たけざい)", value: "2" },
                    { name: "却砂材(きゃくしゃざい)", value: "3" },
                    { name: "松材(まつざい)", value: "4" },
                    { name: "萃華材(すいかざい)", value: "5" },
                    { name: "樺材(かばざい)", value: "6" },
                    { name: "夢見材(ゆめみざい)", value: "7" },
                    { name: "御伽材(おとぎざい)", value: "8" },
                    { name: "楓材(かえでざい)", value: "9" },
                    { name: "孔雀材(くじゃくざい)", value: "10" },
                    
                ]
            }
        ],
    },
    async execute(interaction) {
        //*json5読み込み
        require('json5/lib/register');
        const mokuzai = require('../data/mokuzai.json5');
        const mokuzaiUrl = mokuzai.mokuzai[interaction.options.getString('wood-name')].url

        const embed = {
            //!タイトル
            "title": "おすすめの採取場所です。",
            //!色
            "color": 6697983,
            //!送信者
            "author": {
                "name": "Genshin Impact",
                "url": "https://genshin.mihoyo.com/ja/home",
                "icon_url": "https://pbs.twimg.com/profile_images/1448077862586798081/oFE9yBoj_400x400.jpg"
            },
            //!大きい画像
            "image": {
                "url": mokuzaiUrl
            }
        }
        await interaction.reply({ embeds: [embed] });
    }
}


// else if (args[0] == '杉材' || args[0] == 'すぎざい') {
//     msg.channel.send("杉材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/sugizai1.png"] });
//     msg.channel.send("", { files: ["image/sugizai2.png"] });
//     msg.channel.send("", { files: ["image/sugizai3.png"] });
//   } else if (args[0] == '垂香材' || args[0] == 'すいこうざい') {
//     msg.channel.send("垂香材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/suikouzai1.png"] });
//     msg.channel.send("", { files: ["image/suikouzai2.png"] });
//   } else if (args[0] == '竹材' || args[0] == 'たけざい') {
//     msg.channel.send("竹材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/takezai1.png"] });
//     msg.channel.send("", { files: ["image/takezai2.png"] });
//   } else if (args[0] == '却砂材' || args[0] == 'きゃくしゃざい') {
//     msg.channel.send("却砂材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/kyakushazai1.png"] });
//     msg.channel.send("", { files: ["image/kyakushazai2.png"] });
//   } else if (args[0] == '松材' || args[0] == 'まつざい') {
//     msg.channel.send("松材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/matuzai1.png"] });
//     msg.channel.send("", { files: ["image/matuzai2.png"] });
//     msg.channel.send("", { files: ["image/matuzai3.png"] });
//   } else if (args[0] == '萃華材' || args[0] == 'すいかざい') {
//     msg.channel.send("萃華材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/suikazai1.png"] });
//     msg.channel.send("", { files: ["image/suikazai2.png"] });
//   } else if (args[0] == '樺材' || args[0] == 'かばざい') {
//     msg.channel.send("樺材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/kabazai1.png"] });
//     msg.channel.send("", { files: ["image/kabazai2.png"] });
//   } else if (args[0] == '夢見材' || args[0] == 'ゆめみざい') {
//     msg.channel.send("夢見材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/yumemizai1.png"] });
//     msg.channel.send("", { files: ["image/yumemizai2.png"] });
//   } else if (args[0] == '楓材' || args[0] == 'かえでざい') {
//     msg.channel.send("楓材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/kaedezai1.png"] });
//     msg.channel.send("", { files: ["image/kaedezai2.png"] });
//   } else if (args[0] == '孔雀材' || args[0] == 'くじゃくざい') {
//     msg.channel.send("孔雀材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/kujakuzai1.png"] });
//     msg.channel.send("", { files: ["image/kujakuzai2.png"] });
//   } else if (args[0] == '御伽材' || args[0] == 'おとぎざい') {
//     msg.channel.send("御伽材が見つかりやすい場所です。");
//     msg.channel.send("", { files: ["image/otogizai1.png"] });
//     msg.channel.send("", { files: ["image/otogizai2.png"] });
//   }