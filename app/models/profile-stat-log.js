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
});

export default ProfileStatLog;
