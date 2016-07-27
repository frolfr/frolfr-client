// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api'
});
