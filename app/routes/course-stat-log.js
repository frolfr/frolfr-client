import AuthenticatedRoute from '/app/routes/authenticated';

var CourseStatLogRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('courseStatLog', this.modelFor('course').id);
  }
});

export default CourseStatLogRoute;
