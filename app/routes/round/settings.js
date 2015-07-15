import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function() {
    var _this = this;
    return Ember.RSVP.Promise.all([
      this.store.find('friend'),
    ]).then(function(args) {
      _this.set('friends', args[0]);
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.set('friends', this.get('friends'));
  }
});
