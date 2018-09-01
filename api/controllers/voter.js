const Voter = require('../models').voters;

class VoterController {
	async store(req, res) {
		try {
			const voter = await Voter.create(req.body);
			return res.status(201).send(voter);
		} catch (error) {
			return res.status(500).send(error);
		}
	}
}

module.exports = new VoterController();
