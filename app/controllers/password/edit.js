import Ember from 'ember';
import User from '../../models/user';

var PasswordEditController = Ember.ObjectController.extend({
  needs: "sessions",
  showPasswordError: false,

  actions: {
    changePassword: function() {
      var _this = this,
          password = this.get('model'),
          isValidPassword = User.validPassword({
            password: this.get('password'),
            passwordConfirmation: this.get('passwordConfirmation')
          });

      if (isValidPassword) {
        password.save().then(function(user) {
          var email = user.get('email'),
              password = _this.get('password');
          _this.get('controllers.sessions').send('loginWithCredentials', email, password);
        });
      } else {
        this.set('showPasswordError', true);
      }
    }
  }
});

export default PasswordEditController;
