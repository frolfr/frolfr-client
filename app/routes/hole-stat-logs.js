import AuthenticatedRoute from './authenticated';

var HoleStatLogsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.query('holeStatLog', { course_id: this.modelFor('course').id });
  }
});

export default HoleStatLogsRoute;
