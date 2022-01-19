module.exports = {
  data: {
      name: "99-console-test",
      description: "【Admin】console見る用",
  },
  async execute(interaction) {
      const admin = require('../function/adminCheck.js');
      let adminFlg=admin.adminCheckExecute(interaction);
      if(adminFlg){
        await interaction.reply("テスト");
      }else await interaction.reply("権限がないよ")
  } 
}