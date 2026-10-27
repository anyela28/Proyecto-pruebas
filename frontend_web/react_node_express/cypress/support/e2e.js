import './commands.js';

// Silencia errores no capturados de React en desarrollo
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});