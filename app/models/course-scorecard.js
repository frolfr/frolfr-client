import DS from 'ember-data';

var CourseScorecard = DS.Model.extend({
  createdAt: DS.attr('date'),
  totalStrokes: DS.attr('number'),
  totalScore: DS.attr('number'),
  isCompleted: DS.attr('boolean'),
  round: DS.belongsTo('round', { async: true }),
  roundId: DS.attr('number'),

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
