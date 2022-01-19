module.exports = {
    data: {
        name: "02-random-agent",
        description: "【Valorant】ランダムにエージェントを選択してくれます。",
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
        //*query文字列
        let sql="";
        //*sql結果
        let tableResult = null;
        let agentNum = 0;
        let agentName = "";
        let agentUrl = "";
        //*db接続
        const db = require('../db.js');
        db.pool.connect()
        .then(() => console.log("Connected successfuly"))
        // .then(() => db.pool.query("SELECT * FROM valorantagenttable"))
        .then(function(){
            if(interaction.options.getString('category') === null || interaction.options.getString('category') === "0"){
                sql="SELECT * FROM valorantagenttable";
            }else if(interaction.options.getString('category') === "1"){
                sql="SELECT * FROM valorantagenttable where category = 1";
            }else if(interaction.options.getString('category') === "2"){
                sql="SELECT * FROM valorantagenttable where category = 2";
            }else if(interaction.options.getString('category') === "3"){
                sql="SELECT * FROM valorantagenttable where category = 3";
            }else if(interaction.options.getString('category') === "4"){
                sql="SELECT * FROM valorantagenttable where category = 4";
            }
        })
        .then(() => db.pool.query(sql))
        .then(result => tableResult = result.rows)
        .then(async function(){
            agentNum=Math.floor(Math.random()*(tableResult.length-0))+0;
            agentName = tableResult[agentNum].name
            agentUrl = tableResult[agentNum].url;
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
        })
        .catch(await interaction.reply("コマンドの実行に失敗しました。"));
        
    }
}