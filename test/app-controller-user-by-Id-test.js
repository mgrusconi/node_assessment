
import { expect } from 'chai';
import "chai/register-should"
import request from 'supertest';
import app from '../built/middlewares/express';
//import controller from '../../../modules/v1/app/app-controller';

describe('App Controller Login Method', ()=>{
  
  let token = null;

  before(function(done) {

    let req = {"email": "manningblankenship@quotezart.com"};

    request(app)
      .post('/app/login')
      .set('x-key', '2fvTdG53VCp6z8ZbV66h')
      .send(req)
      .end((err, res) => {
        token = res.body.user_token;
        done();
      });
  });

  it('Error - Bad API Key Test', (done) => {
    
    request(app)
      .get('/app/userbyid/e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
      .set('x-key', 'badApiToken')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        should.not.exist(err);
        res.body.message.should.equal('Invalid API Key');
      done();
    });
  });

  it('Error - Bad User Token', (done) => {
    
    request(app)
      .get('/app/userbyid/e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
      .set({'x-key': '2fvTdG53VCp6z8ZbV66h', 'user-token': 'badUserToken'})
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        should.not.exist(err);
        res.body.message.should.equal('Invalid User Token');
      done();
    });
  });

  it('Successful - Get User by ID Test', (done) => {   
    request(app)
      .get('/app/userbyid/e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
      .set({'x-key': '2fvTdG53VCp6z8ZbV66h', 'user-token': token})
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('user');
        res.body.user.email.should.equal('manningblankenship@quotezart.com');
      done();
    });
  });

});