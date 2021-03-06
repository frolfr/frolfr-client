import AuthenticatedRoute from './authenticated';

var UserRoute = AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('user', params.id);
  }
});

export default UserRoute;
