import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('course', {
  // Specify the other units that are required for this test.
  needs: ['model:scorecard', 'model:hole', 'model:photo', 'model:round', 'model:user', 'model:turn']
});

test('isApproved correctly checks status', function(assert) {
  var model = this.subject({
    status: 'approved'
  });
  assert.equal(model.get('isApproved'), true);
});

test('scorecards relationship', function(assert) {
  var model = this.store().modelFor('course');
  var relationship = Ember.get(model, 'relationshipsByName').get('scorecards');

  assert.equal(relationship.key, 'scorecards');
  assert.equal(relationship.kind, 'hasMany');
});

test('holes relationship', function(assert) {
  var model = this.store().modelFor('course');
  var relationship = Ember.get(model, 'relationshipsByName').get('holes');

  assert.equal(relationship.key, 'holes');
  assert.equal(relationship.kind, 'hasMany');
});

test('photos relationship', function(assert) {
  var model = this.store().modelFor('course');
  var relationship = Ember.get(model, 'relationshipsByName').get('photos');

  assert.equal(relationship.key, 'photos');
  assert.equal(relationship.kind, 'hasMany');
});
