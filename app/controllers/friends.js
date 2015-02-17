import Ember from 'ember';

var FriendsController = Ember.ArrayController.extend({
  sortProperties: ['fullName'],
  sortAscending: true
});

export default FriendsController;
