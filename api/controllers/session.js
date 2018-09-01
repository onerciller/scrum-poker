const Session = require('../models').sessions;
const Story = require('../models').stories;
const Voter = require('../models').voters;
const { slugify } = require('../lib');

class SessionController {
	async index(req, res) {
		try {
			const getSessions = await Session.findAll({
				include: [{ model: Story }],
			});
			return res.status(200).send(getSessions);
		} catch (error) {
			return res.status(500).send(error);
		}
	}

	async show(req, res) {
		const getSession = await Session.find({
			where: { id: req.params.id },
			include: [
				{
					model: Story,
					include: [{ model: Voter }],
				},
			],
		});

		const storyCount = getSession.stories.length;

		if (storyCount !== 0 && getSession.stories[0].status === 'not_voted') {
			Story.update(
				{ status: 'active' },
				{
					where: {
						id: getSession.stories[0].id,
					},
					individualHooks: true,
				}
			);
		}

		return res.status(200).send(getSession);
	}

	async applyVote(req, res) {
		const session = await Session.find({ where: { id: req.params.id } });
		res.send(session);
	}

	async changeDeveloperURL(req, res) {
		const update = await Session.update(
			{ developer_url: slugify(req.body.developer_url) },
			{
				where: {
					id: req.params.session_id,
				},
				individualHooks: true,
			}
		);
		res.status(201).send(update);
	}

	// Create session
	async store(req, res) {
		try {
			const session = await Session.create(req.body, {
				include: [Story],
			});
			return res.status(201).send(session);
		} catch (error) {
			return res.status(500).send(error);
		}
	}
}

module.exports = new SessionController();
