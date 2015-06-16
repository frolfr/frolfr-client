import Ember from 'ember';

var UsersNewController = Ember.ObjectController.extend({
  needs: "sessions",

  actions: {
    save: function() {
      var self = this,
          user = this.get('model');

      if (user.get('hasValidPassword')) {
        user.save().then(function() {
          var email = self.get('email'),
              password = self.get('password');

          self.get('controllers.sessions').send("loginWithCredentials", email, password);
        });
      } else {
        this.set('showPasswordError', true);
      }
    }
  }
});

export default UsersNewController;
