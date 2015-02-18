import Ember from 'ember';
/* global moment */

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return moment(value).format('dddd, MMM Do YYYY');
});
