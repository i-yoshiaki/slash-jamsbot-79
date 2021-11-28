module.exports = {
    data: {
        name: "ping",
        description: "反応してくれるよ",
    },
    async execute(interaction) {
        await interaction.reply('こんにちは');
    }
}