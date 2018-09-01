module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('sessions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			number_of_voters: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			developer_url: {
				allowNull: true,
				type: Sequelize.STRING(200),
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
	down: function (queryInterface) {
		return queryInterface.dropTable('sessions');
	},
};
