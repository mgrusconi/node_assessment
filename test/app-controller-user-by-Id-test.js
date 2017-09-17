
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

  it('Error - Bad API Key test', (done) => {
    
    request(app)
      .get('/app/user/7b624ed3-00d5-4c1b-9ab8-c265067ef58b')
      .set('x-key', '2fvTdG53VCp6z8Z')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('user_token');
      done();
    });
  });

  it('Error - Bad User Token', (done) => {
    
    request(app)
      .get('/app/user/7b624ed3-00d5-4c1b-9ab8-c265067ef58b')
      .set({'x-key': '2fvTdG53VCp6z8Z', 'user-token': 'badtoken'})
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('user_token');
      done();
    });
  });

  it('Error - Bad User Token', (done) => {
    
    request(app)
      .get('/app/user/7b624ed3-00d5-4c1b-9ab8-c265067ef58b')
      .set({'x-key': '2fvTdG53VCp6z8Z', 'user-token': 'badtoken'})
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('user_token');
      done();
    });
  });

  it('Successful - Get User by ID Test', (done) => {
    
    request(app)
      .get('/app/user/7b624ed3-00d5-4c1b-9ab8-c265067ef58b')
      .set('x-key', '2fvTdG53VCp6z8ZbV66h')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('user_token');
      done();
    });
  });

  it('Error login - User not Found test', (done) => {
    
    let req = {"email": "anymail@quotezart.com"};

    request(app)
      .post('/app/login')
      .set('x-key', '2fvTdG53VCp6z8ZbV66h')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        should.not.exist(err);
        res.body.msg.should.equal('User not Found');
      done();
    });
  });

  it('Error login - Bad API Key test', (done) => {
    
    let req = {"email": "anymail@quotezart.com"};

    request(app)
      .post('/app/login')
      .set('x-key', '2fvTdG53VCp6z8ZbV66')
      .send(req)
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        should.not.exist(err);
        res.body.message.should.equal('Invalid API Key');
      done();
    });
  });

});