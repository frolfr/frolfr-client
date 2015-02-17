import AuthenticatedRoute from './authenticated';

var RoundRoute = AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('round', params.id)
  }
});

export default RoundRoute;
