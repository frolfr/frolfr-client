import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome');
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
    this.resource('holeStatLogs', { path: '/holes' });
    this.resource('reviews', function() {
      this.route('new');
    });
    this.resource('review', { path: '/reviews/:review_id' }, function() {
      this.route('edit');
    });
  });
  this.resource('friends');
  this.resource('profile', function() {
    this.route('settings');
    this.resource('profileStatLog', { path: '/stats' });
  });
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
    this.route('settings');
  });
});
export default Router;
