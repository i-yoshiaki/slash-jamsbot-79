module.exports = {
    data: {
        name: "99-query-execute",
        description: "【Admin】クエリ実行",
        options: [
            {
                type: "STRING",
                name: "query",
                description: "query入力",
                required: true,
            }
        ],
    },
    async execute(interaction) {
        const db = require('../db.js');
        const admin = require('../function/adminCheck.js');
        const queryString=interaction.options.getString('query');
        let adminFlg=admin.adminCheckExecute(interaction);
        if(adminFlg){
            let tableResult;
            db.pool.connect()
            .then(() => console.log("Connected successfuly"))
            .then(() => db.pool.query(queryString))
            .then(() =>interaction.reply("クエリ実行完了"))
        }else await interaction.reply("権限がないよ")
    }
}