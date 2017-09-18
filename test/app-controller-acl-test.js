
import { expect } from 'chai';
import "chai/register-should"
import request from 'supertest';
import app from '../built/middlewares/express';

describe('Access Control List Test', ()=>{
  
  let token = null;

  before(function(done) {

    let req = {"email": "barnettblankenship@quotezart.com"};
    request(app)
      .post('/app/login')
      .set('x-key', '2fvTdG53VCp6z8ZbV66h')
      .send(req)
      .end((err, res) => {
        token = res.body.user_token;
        done();
      });
  });

  it('Error - getPoliciesByname ACL Role has´t permission', (done) => {   
    request(app)
      .get('/app/getpoliciesbyname/Manning')
      .set({'x-key': '2fvTdG53VCp6z8ZbV66h', 'user-token': token})
      .expect('Content-Type', /json/)
      .expect(403)
      .end((err, res) => {
        should.not.exist(err);
        res.body.message.should.equal('Unauthorized access');
      done();
    });
  });

  it('Error - getUserByPolicy ACL Role has´t permission', (done) => {   
    request(app)
      .get('/app/getuserbypolicy/64cceef9-3a01-49ae-a23b-3761b604800b')
      .set({'x-key': '2fvTdG53VCp6z8ZbV66h', 'user-token': token})
      .expect('Content-Type', /json/)
      .expect(403)
      .end((err, res) => {
        should.not.exist(err);
        res.body.message.should.equal('Unauthorized access');
      done();
    });
  });

});