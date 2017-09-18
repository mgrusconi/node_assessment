'use strict';

/**
 * Modulo que contiene la implementacion de Express.
 * Module containing the Express implementation.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

import express from 'express';
import swaggerConfig from './swagger';
import swaggerUi from 'swagger-ui-express';
import routings from '../modules/v1/app/app-routing';
import bodyParser from 'body-parser';
import acl from 'express-acl';
import config from '../config/';

const appAcl = __dirname + '/../config/acl.json';

acl.config({
  filename: appAcl,
  baseUrl: config.path,
  decodedObjectName: 'role',
  defaultRole: 'guest'
});

function expressApp() {
    
  // App
  const app = express();

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  // Authentocation
  app.all('/app/*', [require('./validateRequest'),require('./auth')]);

  // ACL
  
  app.use(acl.authorize.unless({
    path:['/app/login']
  }));
  
  //Routing
  app.use('/app/', routings);

  // Swagger
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  return app;
}

module.exports = expressApp();