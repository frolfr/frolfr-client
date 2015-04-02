import AuthenticatedRoute from './authenticated';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

var FriendsRoute = AuthenticatedRoute.extend(RouteMixin, {
  model: function(params) {
    return this.findPaged('friend', params);
  },

  afterModel: function() {
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
