import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('hole', {
  // Specify the other units that are required for this test.
  needs: ['model:turn']
});

test('turns relationship', function(assert) {
  var model = this.store().modelFor('hole');
  var relationship = Ember.get(model, 'relationshipsByName').get('turns');

  assert.equal(relationship.key, 'turns');
  assert.equal(relationship.kind, 'hasMany');
});
