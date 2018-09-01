module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'sessions',
			[
				{
					id: 1,
					name: 'Session 1',
					number_of_voters: 5,
				},
			],
			{}
		);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('sessions', null, {});
	},
};
