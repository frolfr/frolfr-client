import ActiveModelAdapter from 'active-model-adapter';

// Override the default adapter with the `ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
export default ActiveModelAdapter.extend({
  coalesceFindRequests: true
});
