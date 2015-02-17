import AuthenticatedRoute from './authenticated';

var CoursesNewRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.createRecord('course');
  }
});

export default CoursesNewRoute;
