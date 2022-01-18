module.exports = {
  data: {
      name: "console-test",
      description: "console見る用",
  },
  async execute(interaction) {
      await interaction.reply("テスト");
  }
}