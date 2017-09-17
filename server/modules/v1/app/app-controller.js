'use strict';

/**
 * App Controller.
 *
 * @module
 * @author Marcelo Rusconi <mgrusconi@gmail.com>
 */


import jwt from 'jsonwebtoken';
import faker from 'faker';
import Promise from 'bluebird';
import config from '../../../config/';

const request = Promise.promisifyAll(require("request"));

class AppController{
  
  get(req, res, next) {
        return res.status(200).json({"hello": req.params.name});
  }

  login(req, res, next) {
    const key = config.security.private_key;
    const createToken = (user) => {
      let token = jwt.sign(user, key, {
        expiresIn: 60 * 60 * 5
      });
      return token;
    };
    
    request.getAsync({
      url: config.resources.users, 
      method: 'GET'
    }).then((doc)=>{
      let rs = JSON.parse(doc.body);
      let authUser = rs.clients.filter((user)=>{
        if(user.email == req.body.email){
          return user;
        }
      });

      if(authUser.length > 0){
        return res.status(200).json({"user_token": createToken(authUser[0])});
      }else{
        return res.status(404).json({"msg": "User not Found"});
      }
    }).catch(err => next(err));
  }

  userById(req, res, next) {
    
    request.getAsync({
      url: config.resources.users, 
      method: 'GET'
    }).then((doc)=>{
      let rs = JSON.parse(doc.body);
      let authUser = rs.clients.filter((user)=>{
        if(user.id == req.params.id){
          return user;
        }
      });

      if(authUser.length > 0){
        return res.status(200).json({"user": authUser[0]});
      }else{
        return res.status(404).json({"msg": "User not Found"});
      }
    });
  }
}

module.exports = new AppController;