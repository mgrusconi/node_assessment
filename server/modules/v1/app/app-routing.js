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
router.route('/:name').get((req, res) => controller.get(req, res));

module.exports = router;