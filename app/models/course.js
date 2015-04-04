import Ember from 'ember';
import DS from 'ember-data';

var Course = DS.Model.extend({
    city: DS.attr('string'),
    state: DS.attr('string'),
    country: DS.attr('string'),
    name: DS.attr('string'),
    status: DS.attr('string'),
    location: DS.attr('string'),
    roundsPlayed: DS.attr('number'),
    scorecards: DS.hasMany('scorecard', { async: true }),
    holes: DS.hasMany('hole', { async: true }),
    holeCount: DS.attr('number'),
    reviews: DS.hasMany('review', { async: true }),
    images: DS.hasMany('image', {async: true}),

    isApproved: function() {
        return this.get('status') === 'approved';
    }.property('status'),

    hasImage: function() {
        return Ember.isPresent(this.get('images'));
    }.property('images')
});

export default Course;
