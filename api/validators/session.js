const indicative = require('../lib/indicative');

const isValidSessionCreate = async skeleton => {
	const messages = {
		number_voters: 'required and should be integer',
	};
	const rules = {
		name: 'required',
		number_voters: 'required|integer',
	};
	await indicative.validateAll(skeleton, rules, messages);
};

module.exports = {
	isValidSessionCreate,
};
