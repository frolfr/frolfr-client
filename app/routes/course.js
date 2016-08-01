import AuthenticatedRoute from './authenticated';

var CourseRoute = AuthenticatedRoute.extend({
  model: function(params) { return this.store.find('course', params.id); }
});

export default CourseRoute;
