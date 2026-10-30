module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'], // Busca archivos .test.js en la carpeta tests
  verbose: true,
  forceExit: true, // Fuerza la salida después de las pruebas (útil por las conexiones a BD)
  clearMocks: true,
  // Reportes que configuraremos en el Punto 10
  reporters: ['default'],
  maxWorkers: 1, // Ejecuta un archivo a la vez

    // CONFIGURACIÓN DE REPORTES
  reporters: [
    'default', // Muestra el resumen en consola
    [
      'jest-html-reporters',
      {
        publicPath: './reports/backend', // Carpeta donde se guardará el HTML
        filename: 'reporte-backend.html',
        expand: true,
        pageTitle: 'Reporte de Pruebas - Backend Node.js',
        hideIcon: false,
      },
    ],
  ],
};