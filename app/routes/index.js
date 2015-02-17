import AuthenticatedRoute from './authenticated';

var IndexRoute = AuthenticatedRoute.extend({
  redirect: function() {
    this.transitionTo('courses');
  }
});

export default IndexRoute;
