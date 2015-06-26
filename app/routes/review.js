import AuthenticatedRoute from './authenticated';

var ReviewRoute = AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('review', params.review_id);
  }
});

export default ReviewRoute;
