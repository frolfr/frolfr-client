import Ember from 'ember';

export function formattedAddress(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper(formattedAddress);
