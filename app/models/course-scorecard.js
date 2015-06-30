import DS from 'ember-data';
import Ember from 'ember';

var CourseScorecard = DS.Model.extend({
  createdAt: DS.attr('date'),
  totalStrokes: DS.attr('number'),
  totalScore: DS.attr('number'),
  isCompleted: DS.attr('boolean'),
  rating: DS.attr('number'),
  round: DS.belongsTo('round', { async: true }),
  roundId: DS.attr('number'),

  displayRating: function() {
    if (Ember.isPresent(this.get('rating'))) {
      return this.get('rating');
    } else {
      return "N/A";
    }
  }.property('rating'),

  formattedTotalScore: function() {
    var shooting = this.get('totalScore'),
        isCompleted = this.get('isCompleted');

    if (shooting > 0) {
      shooting = "+" + shooting;
    } else if (shooting === 0) {
      shooting = "Even";
    }

    if (!isCompleted) {
      shooting = shooting + "*";
    }

    return shooting;
  }.property('totalScore', 'isCompleted')
});

export default CourseScorecard;
