import AuthenticatedRoute from './authenticated';

var ProfileStatLogRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('profileStatLog', 'current');
  }
});

export default ProfileStatLogRoute;
