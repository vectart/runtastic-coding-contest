import DS from 'ember-data';

var a = DS.attr;

export default DS.Model.extend({
  startTime: a('date'),
  endTime: a('date'),
  duration: a('number'),
  distance: a('number')
});
