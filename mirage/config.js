import Mirage, { faker } from 'ember-cli-mirage';

export default function() {

  this.urlPrefix = 'http://localhost:3000';
  this.namespace = 'api';

  // authentication
  this.post('/authorizations', (schema, request) => {
    console.log('/authorizations');
    // if (request.requestBody === 'email=dev%40frolfr.com&password=password') {
    //   return { token: faker.random.uuid() };
    // } else {
    //   return new Mirage.Response(422, {}, {});
    // }
    return { token: faker.random.uuid() };
  });

  // current user
  this.get('/users/current', (schema/*, request*/) => {
    console.log('/users/current');
    return schema.db.users.find(1);
  });

  // current round
  this.get('/rounds/current', (schema/*, request*/) => {
    console.log('/rounds/current');
    return schema.db.rounds.find(1);
  });

  // courses
  this.get('/courses', (schema/*, request*/) => {
    console.log('/courses');
    return schema.db.courses;
  });

  this.get('/available_courses', (schema/*, request*/) => {
    console.log('/available_courses');
    return schema.db.courses;
  });

  // scorecards
  this.get('/scorecards', (schema/*, request*/) => {
    console.log('/scorecards');
    return schema.db.scorecards.find(554);
  });

  // holes
  this.get('/holes', (schema/*, request*/) => {
    console.log('/holes');
    return schema.db.holes;
  });

  this.get('/friends', null, 200);
}
