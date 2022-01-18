module.exports = {
    data: {
        name: "agent-list",
        description: "【Admin】エージェント一覧",
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
            .then(function(){
                for(let i=0;i<tableResult.length;i++){
                    str+="id:"+tableResult[i].id+" name:"+tableResult[i].name+"\n"
                }
                interaction.reply(str);
            })

        }else await interaction.reply("権限がないよ")
    }
}