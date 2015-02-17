import AuthenticatedRoute from './authenticated';

var ReviewsNewRoute = AuthenticatedRoute.extend({

  model: function() {
    return this.store.createRecord('review', {
      course: this.modelFor('course')
    });
  }

});

export default ReviewsNewRoute;
