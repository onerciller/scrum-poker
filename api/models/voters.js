module.exports = (sequelize, DataTypes) => {
	const voters = sequelize.define(
		'voters',
		{
			name: {
				type: DataTypes.STRING,
			},
			role: {
				type: DataTypes.ENUM('voter', 'master'),
			},
			status: {
				type: DataTypes.ENUM('active', 'not_voted', 'voted'),
			},
		},
		{}
	);
	return voters;
};
