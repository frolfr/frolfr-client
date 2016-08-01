import DS from 'ember-data';

var Photo = DS.Model.extend({
  url: DS.attr('string'),
  takenAt: DS.attr('date')
});

export default Photo;
