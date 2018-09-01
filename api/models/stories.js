module.exports = (sequelize, DataTypes) => {
	const stories = sequelize.define(
		'stories',
		{
			name: DataTypes.STRING,
			story_point: DataTypes.INTEGER,
			status: DataTypes.ENUM('active', 'not_voted', 'voted'),
			session_id: DataTypes.INTEGER,
		},
		{}
	);
	stories.associate = function (models) {
		stories.belongsToMany(models.voters, {
			through: 'story_voters',
			foreignKey: 'story_id',
			otherKey: 'voter_id',
		});
	};
	return stories;
};
