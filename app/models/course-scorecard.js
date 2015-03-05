import DS from 'ember-data';

var CourseScorecard = DS.Model.extend({
  createdAt: DS.attr('date'),
  totalScore: DS.attr('number'),
  totalShooting: DS.attr('number'),
  isCompleted: DS.attr('boolean'),
  round: DS.belongsTo('round', { async: true }),
  roundId: DS.attr('number'),

  formattedTotalShooting: function() {
    var shooting = this.get('totalShooting'),
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
  }.property('totalShooting', 'isCompleted')
});

export default CourseScorecard;
