import Ember from 'ember';

export default Ember.Controller.extend({
  projects: Ember.computed.filter('model', function(project) {
    return project.get('type') === 'play';
  })
});
