import Ember from 'ember';

var UsersNewController = Ember.Controller.extend({
  needs: "sessions",

  actions: {
    save: function() {
      var self = this,
          user = this.get('model');

      if (user.get('hasValidPassword')) {
        user.save().then(function(user) {
          var email = user.get('email'),
              password = user.get('password');

          self.get('controllers.sessions').send("loginWithCredentials", email, password);
        });
      } else {
        this.set('showPasswordError', true);
      }
    }
  }
});

export default UsersNewController;
