/*jshint esversion: 6 */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome');
  this.route('publicRound', { path: '/public/rounds/:id' });
  this.route('sessions', function() {
    this.route('login');
  });
  this.route('courses', function() {
    this.route('new');
  });
  this.route('course', { path: '/courses/:id' }, function() {
    this.route('leaderboard');
    this.route('courseRounds', { path: '/rounds' });
    this.route('courseStatLog', { path: '/stats' });
    this.route('holeStatLogs', { path: '/holes' });
  });
  this.route('friends');
  this.route('profile', function() {
    this.route('settings');
    this.route('profileStatLog', { path: '/stats' });
  });
  this.route('password', function() {
    this.route('reset');
    this.route('edit', { path: '/edit/:password_reset_token' });
  });
  this.route('users', function() {
    this.route('new');
  });
  this.route('user', { path: '/friends/:id' }, function() {
    this.route('userStatLog', { path: '/stats' });
    this.route('jointRounds', { path: '/rounds' });
  });
  this.route('rounds', function() {
    this.route('new');
  });
  this.route('round', { path: '/rounds/:id' }, function() {
    this.route('turns', { path: '/holes/:hole_number' });
    this.route('settings');
  });
});

export default Router;
