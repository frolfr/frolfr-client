import DS from 'ember-data';

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  coalesceFindRequests: true
});

export default ApplicationAdapter;
