module.exports = {
  data: {
      name: "99-console-test",
      description: "console見る用",
  },
  async execute(interaction) {
      await interaction.reply("テスト");
  }
}