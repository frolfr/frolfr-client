import DS from 'ember-data';
import Ember from "ember";

var FriendableUser = DS.Model.extend({
    firstName: DS.attr('string'),
    middleName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    avatarUrl: DS.attr('string'),
    fullName: function() {
      return this.get('firstName') + " " + this.get('lastName');
    }.property("firstName", "lastName"),
    hasAvatar: function() {
      return !Ember.isEmpty(this.get('avatarUrl'));
    }.property('avatarUrl')
});

export default FriendableUser;
