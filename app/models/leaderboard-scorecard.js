import DS from 'ember-data';

var LeaderboardScorecard = DS.Model.extend({
  createdAt: DS.attr('date'),
  userFullName: DS.attr('string'),
  totalScore: DS.attr('number'),
  totalShooting: DS.attr('number'),

  formattedTotalShooting: function() {
    var shooting = this.get('totalShooting');

    if (shooting > 0) {
      shooting = "+" + shooting;
    } else if (shooting === 0) {
      shooting = "Even";
    }

    return shooting;
  }.property('totalShooting')
});

export default LeaderboardScorecard;
