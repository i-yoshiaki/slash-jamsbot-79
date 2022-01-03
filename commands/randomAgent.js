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
        const agentJson = require('../data/randomAgent.json5');
        //*初期化全エージェント取得
        let randomAgent = agentJson.agent.filter(function(item,index){
            if(item.category == "1" || item.category == "2" || item.category == "3" || item.category == "4") return true;
        });
        //*ALLまたはnullだったら全エージェントからランダム
        if(interaction.options.getString('category') === null || interaction.options.getString('category') === "0"){
            agentNum=Math.floor(Math.random()*(randomAgent.length-0))+0;
        }
        //*デュエリストだったらデュエリストからランダム
        else if(interaction.options.getString('category') === "1"){
            randomAgent = agentJson.agent.filter(function(item,index){
                if(item.category == "1") return true;
            });
            agentNum=Math.floor(Math.random()*(randomAgent.length-0))+0;
        }
        //*イニシエーターだったら
        else if(interaction.options.getString('category') === "2"){
            randomAgent = agentJson.agent.filter(function(item,index){
                if(item.category == "2") return true;
            });
            agentNum=Math.floor(Math.random()*(randomAgent.length-0))+0;
        }
        //*コントローラーだったら
        else if(interaction.options.getString('category') === "3"){
            randomAgent = agentJson.agent.filter(function(item,index){
                if(item.category == "3") return true;
            });
            agentNum=Math.floor(Math.random()*(randomAgent.length-0))+0;
        }
        //*センチネルだったら
        else if(interaction.options.getString('category') === "4"){
            randomAgent = agentJson.agent.filter(function(item,index){
                if(item.category == "4") return true;
            });
            agentNum=Math.floor(Math.random()*(randomAgent.length-0))+0;
        }
        
        const agentName = randomAgent[agentNum].name
        const agentUrl = randomAgent[agentNum].url;
        const embed = {
            //!タイトル
            "title": agentName+"に決まりました。",
            //!色
            "color": 6697983,
            //!大きい画像
            "image": {
                "url": agentUrl
            }
        }
        await interaction.reply({ embeds: [embed] });
    }
}