/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frolfr-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    apiHost: '',
    contentSecurityPolicy: {
      'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'style-src': "'self' http://fonts.googleapis.com 'unsafe-inline'",
      'img-src': "'self' https://s3.amazonaws.com http://res.cloudinary.com/frolfr/image/upload/"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiHost = 'http://localhost:3000'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = "https://frolfr.herokuapp.com";
  }

  return ENV;
};
