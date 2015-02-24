import Ember from 'ember';

var CoursesIndexController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true
});

export default CoursesIndexController;
