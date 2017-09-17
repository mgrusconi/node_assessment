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
 * /app/getuser/{type}/{value}:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Test implementatios
 *     description: Test implementatios with Token
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: type
 *         in: path
 *         description: User ID
 *         required: true
 *         type: string
 *         default: id
 *       - name: value
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

router.route('/getuser/:type/:value').get((...args) => controller.getUser(...args));

module.exports = router;