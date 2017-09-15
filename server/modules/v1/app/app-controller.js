'use strict';

/**
 * App Controller.
 *
 * @module
 * @author Marcelo Rusconi <mgrusconi@gmail.com>
 */

class AppController{
    get(req, res, next) {
        return res.status(200).json({"hello": req.params.name});
  }
}

module.exports = new AppController;