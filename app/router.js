import Ember from 'ember';
import config from './config/environment';
var Router = Ember.Router.extend({
  location: config.locationType
});
// Router.reopen({
//   location: 'auto',
//   rootURL: '/'
// });

Router.map(function() {
  this.resource('publicRound', { path: '/public/rounds/:id' });
  this.resource('sessions', function() {
    this.route('login');
  });
  this.resource('courses', function() {
    this.route('new');
  });
  this.resource('course', { path: '/courses/:id' }, function() {
    this.resource('leaderboard');
    this.resource('courseRounds', { path: '/rounds' });
    this.resource('courseStatLog', { path: '/stats' });
    this.resource('reviews', function() {
      this.route('new');
    });
  });
  this.resource('friends');
  this.resource('profile');
  this.resource('password', function() {
    this.route('reset');
    this.route('edit', { path: '/edit/:password_reset_token' });
  });
  this.resource('users', function() {
    this.route('new');
  });
  this.resource('user', { path: '/friends/:id' }, function() {
    this.resource('userStatLog', { path: '/stats' });
    this.resource('jointRounds', { path: '/rounds' });
  });
  this.resource('rounds', function() {
    this.route('new');
  });
  this.resource('round', { path: '/rounds/:id' }, function() {
    this.resource('turns', { path: '/holes/:hole_number' });
  });
});
export default Router;
