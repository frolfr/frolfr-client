import DS from 'ember-data';
import Ember from 'ember';

var Review = DS.Model.extend({
  rating: DS.attr('number'),
  canUpdate: DS.attr('boolean'),
  post: DS.attr('string'),
  course: DS.belongsTo('course', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  createdAt: DS.attr('date'),

  userFullName: Ember.computed.alias('user.fullName')
});

export default Review;
