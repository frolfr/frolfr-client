import Ember from 'ember';

Ember.Handlebars.helper('displayDate', function(value) {
  return moment(value).format('dddd, MMM Do YYYY');
});

export default undefined;
