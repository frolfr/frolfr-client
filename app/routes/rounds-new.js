import AuthenticatedRoute from './authenticated';
import Ember from 'ember';

var RoundsNewRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.createRecord('round');
  },

  afterModel: function() {
    var _this = this;
    return Ember.RSVP.Promise.all([
      this.store.find('availableCourse'),
      this.store.find('friend'),
      this.store.find('user', 'current')
    ]).then(function(args) {
      _this.set('courses', args[0]);
      _this.set('friends', args[1]);
      _this.set('currentUser', args[2]);
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.set('courses', this.get('courses'));
    controller.set('friends', this.get('friends'));
    controller.set('currentUser', this.get('currentUser'));
  }
});

export default RoundsNewRoute;
