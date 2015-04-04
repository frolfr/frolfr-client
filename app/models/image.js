import DS from 'ember-data';

var Image = DS.Model.extend({
  url: DS.attr('string'),
  takenAt: DS.attr('date')
});

export default Image;
