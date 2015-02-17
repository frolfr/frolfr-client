import AuthenticatedRoute from './authenticated';

var CourseStatLogRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('courseStatLog', this.modelFor('course').id);
  }
});

export default CourseStatLogRoute;
