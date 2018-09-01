module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('story_voters', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			story_id: {
				type: Sequelize.INTEGER,
			},
			voter_id: {
				type: Sequelize.INTEGER,
			},
		});
	},
	down: queryInterface => {
		return queryInterface.dropTable('story_voters');
	},
};
