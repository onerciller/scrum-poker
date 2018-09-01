module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'stories',
			[
				{
					id: 1,
					name: 'story 1',
					story_point: 10,
					status: 'voted',
					session_id: 1,
				},
				{
					id: 2,
					name: 'story 2',
					story_point: 0,
					status: 'not_voted',
					session_id: 1,
				},
				{
					id: 3,
					name: 'story 3',
					story_point: 20,
					status: 'active',
					session_id: 1,
				},
				{
					id: 4,
					name: 'story 4',
					story_point: 10,
					status: 'voted',
					session_id: 1,
				},
			],
			{}
		);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('stories', null, {});
	},
};
