import AuthenticatedRoute from './authenticated';

var CoursesRoute = AuthenticatedRoute.extend({
    model: function() {
      return this.store.find('course');
    }
});

export default CoursesRoute;
