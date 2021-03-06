/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    //
  });
  var pickFiles = require('broccoli-static-compiler');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/jquery-cookie/jquery.cookie.js');
  app.import('bower_components/typeahead.js/dist/typeahead.jquery.js');
  app.import('bower_components/highcharts/highcharts.js');
  app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
  app.import('bower_components/components-font-awesome/css/font-awesome.css');
  app.import('bower_components/ember-uploader/dist/ember-uploader.js');
  app.import('bower_components/floatThead/dist/jquery.floatThead.js');

  var fontAwesome = pickFiles('bower_components/components-font-awesome/fonts', {
    srcDir: '/',
    destDir: '/fonts'
  });

  return app.toTree([fontAwesome]);
};
