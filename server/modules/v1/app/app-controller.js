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
        return res.status(404).json({"message": "User not Found"});
      }
    }).catch(err => next(err));
  }

  getUser(req, res, next) {
    request.getAsync({
      url: config.resources.users, 
      method: 'GET'
    }).then((doc)=>{
      let rs = JSON.parse(doc.body);
      let authUser = rs.clients.filter((user)=>{
        if(user[req.params.type] == req.params.value){
          return user;
        }
      });

      if(authUser.length > 0){
        return res.status(200).json({"user": authUser[0]});
      }else{
        return res.status(404).json({"message": "User not Found"});
      }
    });
  }

  getPoliciesByUser(req, res, next) {
    
    request.getAsync({
      url: config.resources.users, 
      method: 'GET'
    }).then((doc)=>{
      let rs = JSON.parse(doc.body);
      let authUser = rs.clients.filter((user)=>{
        if(user.name == req.params.name){
          return user;
        }
      });
      if(authUser.length > 0){
        request.getAsync({
          url: config.resources.policies, 
          method: 'GET'
        }).then((doc)=>{
          let rs = JSON.parse(doc.body);
          let policies = rs.policies.filter((policy)=>{
            if(policy.clientId == authUser[0].id){
              return policy;
            }
          });
          if(policies.length > 0){
            return res.status(200).json({"policies": policies});
          }else{
            return res.status(404).json({"message": "Policies not Found"});
          }
        });
      }else{
        return res.status(404).json({"message": "User not Found"});
      }
    });   
  }

  getUserByPolicy(req, res, next) {
    request.getAsync({
      url: config.resources.policies, 
      method: 'GET'
    }).then((doc)=>{
      let rs = JSON.parse(doc.body);
      let policies = rs.policies.filter((policy)=>{
        if(policy.id == req.params.id){
          return policy;
        }
      });
      if(policies.length > 0){
        request.getAsync({
          url: config.resources.users, 
          method: 'GET'
        }).then((doc)=>{
          let rs = JSON.parse(doc.body);
          let users = rs.clients.filter((user)=>{
            if(user.id == policies[0].clientId){
              return user;
            }
          });
          if(users.length > 0){
            return res.status(200).json({"user": users[0]});
          }else{
            return res.status(404).json({"message": "User not Found"});
          }
        });
      }else{
        return res.status(404).json({"message": "Policy not Found"});
      }
    });   
  }
}

module.exports = new AppController;