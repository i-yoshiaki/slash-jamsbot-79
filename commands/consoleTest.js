module.exports = {
    data: {
        name: "console-test",
        description: "console見る用",
    },
    async execute(interaction) {
        const db = require('../db.js');
        db.pool.connect((err, client) => {
            if (err) {
              console.log(err);
            } else {
              client.query('SELECT * FROM RegularExecuteUrlTable', (err, result) => {
                console.log(result.rows);
              });
            }
        });
        await interaction.reply("テスト");
    }
}