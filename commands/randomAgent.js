module.exports = {
    data: {
        name: "random-agent",
        description: "ランダムにエージェントを選択してくれます。",
        options: [
            {
                type: "STRING",
                name: "category",
                description: "カテゴリーを選択",
                required: false,
                choices: [
                    { name: "ALL", value: "0" },
                    { name: "デュエリスト", value: "1" },
                    { name: "イニシエーター", value: "2" },
                    { name: "コントローラー", value: "3" },
                    { name: "センチネル", value: "4" }  
                ]
            }
        ],
    },
    async execute(interaction) {
        //*json5読み込み
        require('json5/lib/register');
        const agent = require('../data/randomAgent.json5');
        let randomAgent = 0;

        if(interaction.options.getString('category') === null || interaction.options.getString('category') === 0){
            randomAgent=Math.floor(Math.random()*(agent.agent.length-0))+0;
        }
        
        const agentName = agent.agent[randomAgent].name
        const embed = {
            //!タイトル
            "title": agentName+"に決まりました。",
            //!色
            "color": 6697983,
        }
        await interaction.reply({ embeds: [embed] });
    }
}