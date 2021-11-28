module.exports = {
    data: {
        name: "greet",
        description: "Greets!",
        options: [{
            type: "STRING",
            name: "language",
            description: "Choice your language",
            required: true,
            choices: [
                { name: "Japanese", value: "japanese" },
                { name: "English", value: "english" },
            ]
        }],
    },
    async execute(interaction) {
        if (interaction.options.getString('language') === 'japanese') {
            await interaction.reply('こんにちは！');
        } else {
            await interaction.reply('Hello!');
        }
    }
}