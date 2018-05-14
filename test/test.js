let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('API Test', () => {
    it('Test GET /api/v2/recipes', (done) => {
        chai.request(server)
            .get('/api/v2/recipes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
