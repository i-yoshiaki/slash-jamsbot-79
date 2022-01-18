module.exports = {
    data: {
        name: "table-list",
        description: "【Admin】テーブル一覧",
    },
    async execute(interaction) {
        const db = require('../db.js');
        const admin = require('../function/adminCheck.js');
        let str="";
        let adminFlg=admin.adminCheckExecute(interaction);
        if(adminFlg){
            let tableResult;
            db.pool.connect()
            .then(() => console.log("Connected successfuly"))
            .then(() => db.pool.query("select tablename from pg_tables where schemaname not like 'pg_%' and schemaname != 'information_schema';"))
            .then(result => tableResult = result.rows)
            .then(() => console.log(tableResult))
            .then(function(){
                for(let i=0;i<tableResult.length;i++){
                    str+=tableResult[i].tablename+"\n"
                }
                interaction.reply(str);
            })

        }else await interaction.reply("権限がないよ")
    }
}