import Ember from 'ember';

export default Ember.Helper.helper(function([index]) {
  return index + 1 + ".";
});
