module.exports = {
  data: {
      name: "console-test",
      description: "console見る用",
  },
  async execute(interaction) {
    const db = require('../db.js');
    let tableResult;
    db.pool.connect()
    .then(() => console.log("Connected successfuly"))
    .then(() => db.pool.query("SELECT * FROM ValorantAgentTable"))
    .then(result => tableResult = result.rows[0])
    .then(() => console.log(tableResult.url))
    .then(() => interaction.reply("tableResult = "+tableResult.url))
}
}