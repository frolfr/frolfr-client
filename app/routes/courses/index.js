import AuthenticatedRoute from '../authenticated';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import Ember from 'ember';

var CoursesIndexRoute = AuthenticatedRoute.extend(RouteMixin, {
  model: function(params) {
    return this.findPaged('course', params);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    if (Ember.isEmpty(model)) {
      this.transitionTo('welcome');
    }
  }
});

export default CoursesIndexRoute;
