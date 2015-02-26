import Ember from "ember";
import DS from 'ember-data';

var User = DS.Model.extend({
    firstName: DS.attr('string'),
    middleName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    password: DS.attr('string'),
    passwordConfirmation: DS.attr('string'),
    avatarUrl: DS.attr('string'),
    fullName: function() {
      return this.get('firstName') + " " + this.get('lastName');
    }.property("firstName", "lastName"),
    scorecards: DS.hasMany('scorecard', { async: true }),

    hasAvatar: function() {
      return Ember.isPresent(this.get('avatarUrl'));
    }.property('avatarUrl')
});
User.reopenClass({
  validPassword: function(fields) {
    return fields.password === fields.passwordConfirmation;
  }
});

export default User;
