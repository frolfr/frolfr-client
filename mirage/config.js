import Mirage, { faker } from 'ember-cli-mirage';

export default function() {

  this.urlPrefix = 'http://localhost:3000';
  this.namespace = 'api';

  // authentication
  this.post('/authorizations', () => {
    return { token: faker.random.uuid() };
  });

  // current user
  this.get('/users/current', (schema/*, request*/) => {
    const user = schema.db.users.find(1);
    return {
      user
    };
  });

  // rounds
  this.get('/rounds', (schema/*, request*/) => {
    const rounds = schema.db.rounds;
    return {
      rounds
    };
  });

  this.get('/rounds/:id', (schema, request) => {
    const round = schema.db.round.find(request.params.id);
    return {
      round
    };
  });

  this.get('/rounds/current', () => {
    return null;
  });

  // courses
  this.get('/courses', (schema/*, request*/) => {
    const courses = schema.db.courses;
    return {
      courses
    };
  });

  this.get('/courses/:id', (schema, request) => {
    const course = schema.db.courses.find(request.params.id);
    return {
      course
    };
  });

  this.get('/available_courses', (schema/*, request*/) => {
    const availableCourses = schema.db.courses;
    return {
      availableCourses
    };
  });

  this.get('/nearest_courses', {}, 200);

  // scorecards
  this.get('/scorecards/:id', (schema/*, request*/) => {
    const scorecard = schema.db.scorecards.find(554);
    return {
      scorecard
    };
  });

  // holes
  this.get('/holes', (schema/*, request*/) => {
    const holes = schema.db.holes;
    return {
      holes
    };
  });

  this.get('/friends', (schema/*, request*/) => {
    const friends = schema.db.friends;
    return {
      friends
    };
  });
}
