import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';
var run = Ember.run;

moduleForModel('turn', {
  // Specify the other units that are required for this test.
  needs: ['model:scorecard', 'model:round', 'model:user']
});

test('scorecard relationship', function(assert) {
  var model = this.store().modelFor('turn');
  var relationship = Ember.get(model, 'relationshipsByName').get('scorecard');

  assert.equal(relationship.key, 'scorecard');
  assert.equal(relationship.kind, 'belongsTo');
});

test('parStatus displays abovePar if shooting < 0', function(assert) {
  var model = this.subject({
    strokes: 3,
    par: 2
  });
  assert.equal(model.get('parStatus'), 'abovePar');
});

test('parStatus displays atPar if shooting = 0', function(assert) {
  var model = this.subject({
    strokes: 1,
    par: 1
  });
  assert.equal(model.get('parStatus'), 'atPar');
});

test('parStatus displays belowPar if shooting is < 0', function(assert) {
  var model = this.subject({
    strokes: 2,
    par: 3
  });
  assert.equal(model.get('parStatus'), 'belowPar');
});

test('shooting checks strokes versus par', function(assert) {
  var model = this.subject({
    strokes: 3,
    par: 2
  });
  assert.equal(model.get('shooting'), 1);
});

test('isPlayed correctly checks if strokes are present', function(assert) {
  var model = this.subject({
    strokes: 1
  });
  assert.equal(model.get('isPlayed'), true);
});

test('displayStrokes shows number of strokes if playing, else display "-"', function(assert) {
  var model = this.subject({
    strokes: 1
  });
  assert.equal(model.get('displayStrokes'), 1);

  run(function () {
    model.set('strokes', '');
  });
  assert.equal(model.get('displayStrokes'), '-');
});
