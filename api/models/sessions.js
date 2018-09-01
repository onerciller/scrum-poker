module.exports = (sequelize, DataTypes) => {
	const sessions = sequelize.define(
		'sessions',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(200),
			},
			number_of_voters: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			developer_url: {
				allowNull: true,
				type: DataTypes.STRING,
			},
		},
		{}
	);
	sessions.associate = function (models) {
		sessions.hasMany(models.stories);
	};
	return sessions;
};
