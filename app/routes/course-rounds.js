import AuthenticatedRoute from './authenticated';

var CourseRoundsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.query('courseScorecard', { course_id: this.modelFor('course').id });
  }
});

export default CourseRoundsRoute;
