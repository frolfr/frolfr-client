import AuthenticatedRoute from '/app/routes/authenticated';

var UserStatLogRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('userStatLog', this.modelFor('user').id);
  }
});

export default UserStatLogRoute;
