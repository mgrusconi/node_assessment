'use strict';

/**
 * App Router
 *
 * @module
 * @author Marcelo Rusconi <mgrusconi@gmail.com>
 */

import { Router } from 'express';
import controller from './app-controller';
const router = new Router();

/**
 * @swagger
 * definition:
 *   login:
 *     type: object
 *     required:
 *       - email
 *     properties:
 *       email:
 *         type: string
 *         default: "manningblankenship@quotezart.com"
 *         description: e-mail User
 */

/**
 * @swagger
 * /app/{name}:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Test implementatios
 *     description: Test implementatios with Token
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Name
 *         required: true
 *         type: string
 *       - name: x-key
 *         in: header
 *         description: API key
 *         required: true
 *         type: string
 *         format: string
 *         default: 2fvTdG53VCp6z8ZbV66h
 *     responses:
 *       200:
 *         description: app!
 *         schema:
 *           $ref: ''
 */
router.route('/:name').get((...args) => controller.get(...args));

 /**
 * @swagger
 * /app/login:
 *   post:
 *     tags:
 *       - API v1
 *     summary: Login with User email
 *     description: Login with User email
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Profile
 *         required: true
 *         schema:
 *           $ref: '#/definitions/login'
 *       - name: x-key
 *         in: header
 *         description: API key
 *         required: true
 *         type: string
 *         format: string
 *         default: 2fvTdG53VCp6z8ZbV66h
 *     responses:
 *       200:
 *         description: Profile created!
 */
router.route('/login').post((...args) => controller.login(...args));

/**
 * @swagger
 * /app/userbyid/{id}:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Test implementatios
 *     description: Test implementatios with Token
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         type: string
 *         default: 031a0925-b531-4e5a-a5f4-059be5f5d9db
 *       - name: x-key
 *         in: header
 *         description: API key
 *         required: true
 *         type: string
 *         format: string
 *         default: 2fvTdG53VCp6z8ZbV66h
 *       - name: user-token
 *         in: header
 *         description: User Token JWT
 *         type: string
 *         format: string
 *         default:
 *     responses:
 *       200:
 *         description: app!
 *         schema:
 *           $ref: ''
 */

router.route('/userbyid/:id').get((...args) => controller.userById(...args));

module.exports = router;