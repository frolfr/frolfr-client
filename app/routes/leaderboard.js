import AuthenticatedRoute from './authenticated';

var LeaderboardRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.query('leaderboardScorecard', { course_id: this.modelFor('course').id });
  }
});

export default LeaderboardRoute;
