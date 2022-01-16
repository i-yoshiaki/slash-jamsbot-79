module.exports = {
  data: {
      name: "console-test",
      description: "console見る用",
  },
  async execute(interaction) {
    // const db = require('../db.js');
    // let tableResult;
    // db.pool.connect()
    // .then(() => console.log("Connected successfuly"))
    // .then(() => db.pool.query("SELECT * FROM ValorantAgentTable"))
    // .then(result => tableResult = result.rows[0])
    // .then(() => console.log(tableResult.url))
    // .then(() => interaction.reply("tableResult = "+tableResult.url))
    const today = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    const jamv = new Date(process.env.JAM_BIRTHDAY.slice(0,4),process.env.JAM_BIRTHDAY.slice(4,6),process.env.JAM_BIRTHDAY.slice(6,8));
    const motov = new Date(process.env.MOTO_BIRTHDAY.slice(0,4),process.env.MOTO_BIRTHDAY.slice(4,6),process.env.MOTO_BIRTHDAY.slice(6,8));
    const reiyuuv = new Date(process.env.REIYUU_BIRTHDAY.slice(0,4),process.env.REIYUU_BIRTHDAY.slice(4,6),process.env.REIYUU_BIRTHDAY.slice(6,8));
    const shamojiv = new Date(process.env.SHAMOJI_BIRTHDAY.slice(0,4),process.env.SHAMOJI_BIRTHDAY.slice(4,6),process.env.SHAMOJI_BIRTHDAY.slice(6,8));
    const tasunv = new Date(process.env.TASUN_BIRTHDAY.slice(0,4),process.env.TASUN_BIRTHDAY.slice(4,6),process.env.TASUN_BIRTHDAY.slice(6,8));
    const machamiv = new Date(process.env.MACHAMI_BIRTHDAY.slice(0,4),process.env.MACHAMI_BIRTHDAY.slice(4,6),process.env.MACHAMI_BIRTHDAY.slice(6,8));
    console.log("todayd="+today.getDate())
    console.log("machamivd="+machamiv.getDate())
    console.log("todaym="+today.getMonth())
    console.log("machamivm="+machamiv.getMonth())
    console.log(today.getMonth()+1 == machamiv.getMonth())
    console.log(today.getDate() == machamiv.getDate()+1)
    await interaction.reply("test");

  }
}