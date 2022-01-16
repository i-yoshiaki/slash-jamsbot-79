module.exports = {
  data: {
      name: "console-test",
      description: "console見る用",
  },
  async execute(interaction) {
      const birthday = require('../birthday.js');
      let embed = birthday.birthdayExecute();
      await interaction.reply({ embeds: [embed] });
      
  }
}