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
const PORT = 80;
app.listen(PORT);

console.log('Running on http://localhost:' + PORT);