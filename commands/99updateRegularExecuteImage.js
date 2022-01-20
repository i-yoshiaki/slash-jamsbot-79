module.exports = {
    data: {
        name: "99-update-regular-execute-image",
        description: "【Admin】定期実行の画像アップデート",
        options: [
            {
                type: "STRING",
                name: "url",
                description: "url入力",
                required: true,
            }
        ],
    },
    async execute(interaction) {
        const db = require('../db.js');
        const admin = require('../function/adminCheck.js');
        let queryStringUrl=interaction.options.getString('url');
        let queryString = "UPDATE regularexecuteurltable SET url = "+queryStringUrl+" WHERE id = 1"
        let adminFlg=admin.adminCheckExecute(interaction);
        if(adminFlg){
            db.pool.connect()
            .then(() => console.log("Connected successfuly"))
            .then(() => db.pool.query(queryString))
            .then(() =>interaction.reply("クエリ実行完了"))
        }else await interaction.reply("権限がないよ")
    }
}