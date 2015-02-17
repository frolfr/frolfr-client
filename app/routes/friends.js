import AuthenticatedRoute from './authenticated';

var FriendsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('friend');
  },

  afterModel: function(model) {
    var _this = this;
    return this.store.find('friendableUser').then(function(friendableUsers) {
      _this.set('friendableUsers', friendableUsers);
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('friendableUsers').set('model', this.get('friendableUsers'));
  }
});

export default FriendsRoute;
