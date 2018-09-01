const request = require('supertest');
const { assert } = require('chai');
const app = require('../../');

describe('/api/sessions tests', () => {
	describe('/GET sessions', () => {
		it('it should GET all the sessions', done => {
			request(app).get('/sessions').end((err, res) => {
				assert.equal(res.status, 200);
				assert.typeOf(res.body, 'array');
				done();
			});
		});
	});
});
