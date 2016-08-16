import Ember from 'ember';
/* global moment */

export default Ember.Helper.helper(function([value]) {
  return moment(value).format('dddd, MMM Do YYYY');
});
