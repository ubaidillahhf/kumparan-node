const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../index');
const expect = chai.expect;
// article mocks
const articleCreateMock = require('../mocks/article/article_create.json');
const articleListMock = require('../mocks/article/article_list.json');

describe('POST api/v1/article', () => {
    it('should return status 201', done => {
        chai
        .request(app)
        .post('/api/v1/article')
        .send(articleCreateMock)
        .end((err, res) => {
        expect(res).to.have.status(201);
        done();
        });
    });
  });

describe('GET api/v1/article', () => {
    it('should return a list of article when called', done => {
        chai
        .request(app)
        .get('/api/v1/article')
        .query({page:1,limit:10,author:"System",query:"Example"})
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(articleListMock);
        done();
        });
    });
  });
            



