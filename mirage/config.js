import Mirage, { faker } from 'ember-cli-mirage';

export default function() {

  this.urlPrefix = 'http://localhost:3000';
  this.namespace = 'api';

  // authentication
  this.post('/authorizations', (schema, request) => {
    if (request.requestBody === 'email=dev%40frolfr.com&password=password') {
      return { token: faker.random.uuid() };
    } else {
      return new Mirage.Response(422, {}, {});
    }
  });

  // current user
  this.get('/users/current', { user: { first_name: 'Joe', last_name: 'Schmoe', email: 'joe.schmoe@noreply.com' } }, 200);

  // current round
  this.get('/rounds/current', { rounds: [] }, 200);

  // courses
  this.get('/courses', { courses: [] }, 200);
}
