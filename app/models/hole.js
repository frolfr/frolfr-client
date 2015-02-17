import DS from 'ember-data';

var Hole = DS.Model.extend({
  number: DS.attr('number'),
  turns: DS.hasMany('turn', { async: true })
});

export default Hole;
