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