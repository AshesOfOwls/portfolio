import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  description: DS.attr('string')
});
