import ApplicationAdapter from '/app/adapters/application';

var UserAdapter = ApplicationAdapter.extend({
  coalesceFindRequests: false
});

export default UserAdapter;
