module.exports = (sequelize, DataTypes) => {
	const storyVoters = sequelize.define(
		'story_voters',
		{
			story_id: DataTypes.INTEGER,
			voter_id: DataTypes.INTEGER,
		},
		{
			timestamps: false,
			paranoid: false,
		}
	);
	return storyVoters;
};
