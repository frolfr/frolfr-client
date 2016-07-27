import ApplicationAdapter from './application';

var UserAdapter = ApplicationAdapter.extend({
  coalesceFindRequests: false
});

export default UserAdapter;
