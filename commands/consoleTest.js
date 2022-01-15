module.exports = {
    data: {
        name: "console-test",
        description: "console見る用",
    },
    async execute(interaction) {
        const db = require('../db.js');
        const url='';
        db.pool.connect((err, client) => {
            if (err) {
              console.log(err);
            } else {
              client.query('SELECT * FROM RegularExecuteUrlTable', (err, result) => {
                console.log(result.rows[0]);
                url=result.rows[0].url;
              });
            }
        });
        await interaction.reply(url);
    }
}