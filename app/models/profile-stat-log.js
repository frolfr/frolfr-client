import DS from 'ember-data';

var ProfileStatLog = DS.Model.extend({
  coursesPlayed: DS.attr('number'),
  scorecardsStarted: DS.attr('number'),
  completedScorecards: DS.attr('number'),
  statesPlayed: DS.attr('number'),
  topPlayedCourseName: DS.attr('string'),
  topPlayedCourseScorecardsStarted: DS.attr('number'),
  topFriendName: DS.attr('string'),
  topFriendRoundsCount: DS.attr('number'),

  hasNeverPlayed: function() {
    return this.get('scorecardsStarted') === 0;
  }.property('scorecardsStarted'),

  displayTopPlayedCourse: function() {
    return this.get('topPlayedCourseName') + ' (' + this.get('topPlayedCourseScorecardsStarted') + ' rounds)';
  }.property('topPlayedCourseName', 'topPlayedCourseScorecardsStarted'),

  displayTopFriend: function() {
    return this.get('topFriendName') + ' (' + this.get('topFriendRoundsCount') + ' rounds)';
  }.property('topFriendName', 'topFriendRoundsCount')
});

export default ProfileStatLog;
