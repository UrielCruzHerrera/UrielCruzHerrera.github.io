// karma.config.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'), // <-- Agregamos Firefox
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Aquí puedes poner configuraciones de Jasmine si lo necesitas
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/mycvv'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' } // <-- Esto ayuda a que salga en texto
      ]
    },
    reporters: ['progress', 'kjhtml'],
    
    // Configuración de los navegadores
    browsers: ['FirefoxHeadless'], // <-- Firefox en modo texto (invisible)
    // browsers: ['Firefox'], // <-- Descomenta esta línea si quieres ver la ventana de Firefox

     customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

    singleRun: true, // <-- true para que corra, muestre en consola y termine
    restartOnFileChange: false 
  });
};