'use strict';

/**
 * Punto de entrada de la aplicacion.
 * Entry Point of the application.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

import app from './middlewares/express';

// Constants
const PORT = 3080;
app.listen(PORT);