import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

var FriendsController = Ember.ArrayController.extend({
  pagedContent: pagedArray("content", {infinite: true}),

  actions: {
    loadNext: function() {
      this.get('pagedContent').loadNextPage();
    }
  }
});

export default FriendsController;
