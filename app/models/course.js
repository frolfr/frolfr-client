import Ember from 'ember';
import DS from 'ember-data';

var Course = DS.Model.extend({
    city: DS.attr('string'),
    state: DS.attr('string'),
    country: DS.attr('string'),
    name: DS.attr('string'),
    status: DS.attr('string'),
    location: DS.attr('string'),
    lastPlayedAt: DS.attr('date'),
    scorecards: DS.hasMany('scorecard', { async: true }),
    holes: DS.hasMany('hole', { async: true }),
    holeCount: DS.attr('number'),
    photos: DS.hasMany('photo', {async: true}),

    isApproved: function() {
        return this.get('status') === 'approved';
    }.property('status'),

    hasPhoto: function() {
        return Ember.isPresent(this.get('photos'));
    }.property('photos')
});

export default Course;
