import Ember from 'ember';

var CoursesIndexController = Ember.Controller.extend({
  queryParams: ["page"],

  pageBinding: "content.page",

  page: 1
});

export default CoursesIndexController;
