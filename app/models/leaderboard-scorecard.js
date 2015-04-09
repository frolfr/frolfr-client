import DS from 'ember-data';

var LeaderboardScorecard = DS.Model.extend({
  createdAt: DS.attr('date'),
  userFullName: DS.attr('string'),
  totalStrokes: DS.attr('number'),
  totalScore: DS.attr('number'),

  formattedTotalScore: function() {
    var shooting = this.get('totalScore');

    if (shooting > 0) {
      shooting = "+" + shooting;
    } else if (shooting === 0) {
      shooting = "Even";
    }

    return shooting;
  }.property('totalScore')
});

export default LeaderboardScorecard;
