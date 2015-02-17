import AuthenticatedRoute from './authenticated';

var LeaderboardRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.modelFor('course').get('scorecards');
  }
});

export default LeaderboardRoute;
