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
        //*変数初期化
        let tableResult = null;
        let agentNum = 0;
        let agentName = "";
        let agentUrl = "";
        //*db接続
        const db = require('../db.js');

        db.pool.connect()
        .then(client => {
            return client
            .query(sql)
            .then(result => {
                client.release()
                tableResult = result.rows
                console.log(tableResult);
            })
            .catch(err => {
                client.release()
                console.log(err.stack)
            })
            .then(function(){
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
                interaction.reply({ embeds: [embed] });
            })
        })
    }
}