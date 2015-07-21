import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function() {
    var _this = this;

    return this.store.find('friend').then(function(friends) {
      _this.set('friends', friends);
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.set('friends', this.get('friends'));
  }
});
