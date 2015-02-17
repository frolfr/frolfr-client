import DS from 'ember-data';

var ApiKeyAdapter = DS.LSAdapter.extend({
  namespace: 'frolfr'
});

export default ApiKeyAdapter;
