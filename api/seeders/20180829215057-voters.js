module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'voters',
			[
				{
					id: 1,
					name: 'voter 1',
					status: 'voted',
					role: 'master',
				},
				{
					id: 2,
					name: 'voter 2',
					status: 'voted',
					role: 'voter',
				},
				{
					id: 3,
					name: 'voter 3',
					status: 'voted',
					role: 'voter',
				},
				{
					id: 4,
					name: 'voter 4',
					status: 'voted',
					role: 'voter',
				},
			],
			{}
		);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('voters', null, {});
	},
};
