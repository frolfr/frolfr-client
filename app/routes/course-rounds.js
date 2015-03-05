import AuthenticatedRoute from './authenticated';

var CourseRoundsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('courseScorecard', { course_id: this.modelFor('course').id });
  }
});

export default CourseRoundsRoute;
