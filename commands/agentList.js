module.exports = {
    data: {
        name: "【Admin】agent-list",
        description: "console見る用",
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
            .then(() => db.pool.query("SELECT * FROM ValorantAgentTable ORDER BY id ASC"))
            .then(result => tableResult = result.rows)
            .then(() => console.log(tableResult))
            .then(function(){
                for(let i=0;i<tableResult.length;i++){
                    str+=tableResult[i].name+"\n"
                }
                interaction.reply(str);
            })
            
        }else await interaction.reply("権限がないよ")
    }
}