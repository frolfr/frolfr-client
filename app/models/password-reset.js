import DS from 'ember-data';

var PasswordReset = DS.Model.extend({
  email: DS.attr('string')
});

export default PasswordReset;
