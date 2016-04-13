import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'section',
  classNames: 'projects-previewBlock'
});
