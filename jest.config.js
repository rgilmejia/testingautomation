module.exports = {
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Reporte de Pruebas',
      outputPath: './reportes/test-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
      hideConsoleLogOrigin: true
    }]
  ]
};