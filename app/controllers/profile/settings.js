import Ember from 'ember';

var ProfileSettingsController = Ember.Controller.extend({
  actions: {
    saveChanges: function() {
      this.get('model').save();
    },

    cancel: function() {
      this.get('model').rollback();
    }
  }
});

export default ProfileSettingsController;
