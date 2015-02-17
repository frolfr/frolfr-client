import AuthenticatedRoute from './authenticated';

var ReviewsIndexRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.modelFor('course').get('reviews');
  }
});

export default ReviewsIndexRoute;
