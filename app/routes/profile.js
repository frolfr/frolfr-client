import AuthenticatedRoute from './authenticated';

var ProfileRoute = AuthenticatedRoute.extend({
  model: function() { return this.store.find('user', 'current'); }
});

export default ProfileRoute;
