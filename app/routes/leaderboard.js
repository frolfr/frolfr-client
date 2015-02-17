import AuthenticatedRoute from '/app/routes/authenticated';

var LeaderboardRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.modelFor('course').get('scorecards');
  }
});

export default LeaderboardRoute;
