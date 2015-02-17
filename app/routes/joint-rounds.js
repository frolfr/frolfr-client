import AuthenticatedRoute from '/app/routes/authenticated';

var JointRoundsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('jointRound', { user_id: this.modelFor('user').id });
  }
});

export default JointRoundsRoute;
