import Ember from 'ember';

var ProfileController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function() {
      this.get('model').save();
    },

    cancel: function() {
      this.get('model').rollback();
    }
  }
});

export default ProfileController;
