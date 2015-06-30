import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:course-rounds', {
});

test('hasRatings', function(assert) {
  var controller = this.subject(),
      scorecard = Ember.Object.create({rating: 1000});

  controller.set('filteredContent', [scorecard]);

  assert.ok(controller.get('hasRatings'), 'when any scorecard has a rating');
});

test('!hasRatings', function(assert) {
  var controller = this.subject(),
      scorecard = Ember.Object.create({rating: null});

  controller.set('filteredContent', [scorecard]);

  assert.equal(controller.get('hasRatings'), false, 'when no scorecard has a rating');
});
