import DS from 'ember-data';
import config from 'frolfr-client/config/environment';

var ApplicationStore = DS.Store.extend({

});
DS.RESTAdapter.reopen({
  namespace: 'api',
  host: config.apiHost
});

export default ApplicationStore;
