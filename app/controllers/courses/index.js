import Ember from 'ember';

var CoursesIndexController = Ember.ArrayController.extend({
  queryParams: ["page"],

  pageBinding: "content.page",

  page: 1
});

export default CoursesIndexController;
