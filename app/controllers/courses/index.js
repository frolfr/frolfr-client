import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

var CoursesIndexController = Ember.ArrayController.extend({
  queryParams: ["page"],

  pageBinding: "content.page",

  page: 1
});

export default CoursesIndexController;
