import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  repoLink: DS.attr('string'),
  demoLink: DS.attr('string')
});
