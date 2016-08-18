import Ember from 'ember';

export default Ember.Helper.helper(function([score]) {
  if (score > 0) {
    return "+" + score;
  } else if (Math.abs(score) === 0) {
    return "Even";
  } else {
    return score;
  }
});
