const cors = (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With'
	);

	res.setHeader('Access-Control-Allow-Credentials', true);
	// intercept OPTIONS method
	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
};

module.exports = cors;
