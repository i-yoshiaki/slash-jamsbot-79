module.exports = {
    data: {
        name: "00-snipe",
        description: "スナイプするときに使います。10秒カウントしてくれます。",
    },
    async execute(interaction) {
        const wait = require('util').promisify(setTimeout);
        await interaction.reply('10');
        await wait(1000);
        await interaction.editReply('9');
        await wait(1000);
        await interaction.editReply('8');
        await wait(1000);
        await interaction.editReply('7');
        await wait(1000);
        await interaction.editReply('6');
        await wait(1000);
        await interaction.editReply('5');
        await wait(1000);
        await interaction.editReply('4');
        await wait(1000);
        await interaction.editReply('3');
        await wait(1000);
        await interaction.editReply('2');
        await wait(1000);
        await interaction.editReply('1');
        await wait(1000);
        await interaction.followUp('@here'+'lets Go!');
    }
}
