module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('stories', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			story_point: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.ENUM('active', 'not_voted', 'voted'),
				defaultvalue: 'not_voted',
			},
			session_id: {
				type: Sequelize.INTEGER,
			},
			created_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			deleted_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	down: queryInterface => {
		return queryInterface.dropTable('stories');
	},
};
