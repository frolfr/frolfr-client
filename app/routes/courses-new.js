import AuthenticatedRoute from '/app/routes/authenticated';

var CoursesNewRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.createRecord('course');
  }
});

export default CoursesNewRoute;
