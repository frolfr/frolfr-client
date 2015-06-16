import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', {
  // Specify the other units that are required for this test.
  needs: [
    'model:scorecard',
    'model:round',
    'model:course',
    'model:turn'
  ]
});

test('User has matching password and confirmation', function(assert) {
  var model = this.subject({
    password: 'password',
    passwordConfirmation: 'password'
  });

  assert.ok(model.get('hasValidPassword'), 'has valid password');
});

test('User does not have matching password and confirmation', function(assert) {
  var model = this.subject({
    password: 'password',
    passwordConfirmation: 'different-password'
  });

  assert.equal(model.get('hasValidPassword'), false, 'does not have valid password');
});
