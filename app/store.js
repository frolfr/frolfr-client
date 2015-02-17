import DS from 'ember-data';

var ApplicationStore = DS.Store.extend({

});
DS.RESTAdapter.reopen({
  namespace: 'api'
});

export default ApplicationStore;
