const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong.'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await interaction.editReply({ content: 'pong', ephemeral: true });
	},
};