import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  suffix: '.json',

  pathForType: function(type) {
    return this._super(type) + this.get('suffix');
  }
});
