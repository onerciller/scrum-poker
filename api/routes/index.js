const SessionController = require('../controllers/session');
const VoterController = require('../controllers/voter');

module.exports = app => {
	app.get('/', (req, res) => {
		res.send('home');
	});

	app.get('/sessions', SessionController.index);

	app.post('/sessions', SessionController.store);

	app.get('/sessions/:id', SessionController.show);

	app.post('/sessions/:id', SessionController.applyVote);

	app.post('/voters', VoterController.store);

	app.put(
		'/change-developer-url/:session_id',
		SessionController.changeDeveloperURL
	);
};
