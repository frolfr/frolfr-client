import ApplicationAdapter from './application';

var RoundAdapter = ApplicationAdapter.extend({
  coalesceFindRequests: false
});

export default RoundAdapter;
