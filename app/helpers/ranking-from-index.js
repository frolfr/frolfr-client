import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(index) {
  return index + 1 + ".";
});
