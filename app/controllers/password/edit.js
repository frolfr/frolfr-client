import Ember from 'ember';

var PasswordEditController = Ember.Controller.extend({
  needs: "sessions",
  showPasswordError: false,

  actions: {
    changePassword: function() {
      var _this = this,
          password = this.get('model'),
          isValidPassword = password.get('password') === password.get('passwordConfirmation');

      if (isValidPassword) {
        password.save().then(function(user) {
          var email = user.get('email'),
              password = user.get('password');

          _this.get('controllers.sessions').send('loginWithCredentials', email, password);
        });
      } else {
        this.set('showPasswordError', true);
      }
    }
  }
});

export default PasswordEditController;
