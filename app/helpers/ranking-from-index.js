import Ember from 'ember';

Ember.Handlebars.helper('rankingFromIndex', function(index) {
  return index + 1 + ".";
});

export default undefined;
