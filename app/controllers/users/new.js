import Ember from 'ember';

var UsersNewController = Ember.Controller.extend({
  needs: "sessions",

  actions: {
    save: function() {
      var self = this,
          user = this.get('model');


        user.save().then(function(user) {
          var email = user.get('email');
          var password = self.get('fields').password;
      if (user.get('hasValidPassword')) {

          self.get('controllers.sessions').send("loginWithCredentials", email, password);
        });
      } else {
        this.set('showPasswordError', true);
      }
    }
  }
});

export default UsersNewController;
