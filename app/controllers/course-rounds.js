import Ember from 'ember';

var CourseRoundsController = Ember.ArrayController.extend({
  // Pagination
  page: 1,
  perPage: 10,

  hasRatings: function() {
    return this.get('filteredContent').any(function(scorecard) {
      return Ember.isPresent(scorecard.get('rating'));
    });
  }.property('filteredContent.@each.rating'),

  pagedContent: function() {
    var start = (this.get('page') - 1) * this.get('perPage');
    var end = this.get('page') * this.get('perPage');

    return this.get('filteredContent').slice(start, end);
  }.property('filteredContent.@each', 'page', 'perPage'),

  isPaginated: function() {
    return this.get('filteredContent').length > this.get('perPage');
  }.property('filteredContent.length', 'perPage'),

  isFirstPage: function() {
    return this.get('page') === 1;
  }.property('page'),

  totalPages: function() {
    return Math.ceil(this.get('filteredContent').length / this.get('perPage'));
  }.property('page', 'perPage', 'filteredContent.length'),

  isLastPage: function() {
    return this.get('page') === this.get('totalPages');
  }.property('page', 'totalPages'),

  // Filtering
  includeIncompleteScorecards: false,

  resetPageCount: function() {
    this.set('page', 1);
  }.observes('includeIncompleteScorecards'),

  filteredContent: function() {
    if (this.get('includeIncompleteScorecards')) {
      return this.get('arrangedContent');
    } else {
      return this.get('completedScorecards');
    }
  }.property('arrangedContent.@each', 'includeIncompleteScorecards', 'completedScorecards.@each'),

  completedScorecards: function() {
    return this.get('arrangedContent').filter(function(scorecard) {
      return scorecard.get('isCompleted');
    });
  }.property('arrangedContent.@each.isCompleted'),

  allScorecardsCompleted: function() {
    return this.get('arrangedContent').every(function(scorecard) {
      return scorecard.get('isCompleted');
    });
  }.property('arrangedContent.@each.isCompleted'),

  // Sorting
  sortProperties: ['createdAt'],
  sortAscending: false,

  currentSortProperty: function() {
    return this.get('sortProperties').get('0');
  }.property('sortProperties'),

  sortCreatedAt: function() {
    return this.isSortedBy('createdAt');
  }.property('currentSortProperty', 'sortDirection'),

  sortTotalStrokes: function() {
    return this.isSortedBy('totalStrokes');
  }.property('currentSortProperty', 'sortDirection'),

  sortTotalScore: function() {
    return this.isSortedBy('totalScore');
  }.property('currentSortProperty', 'sortDirection'),

  isSortedBy: function(property) {
    if (this.get('currentSortProperty') === property) {
      return this.get('sortDirection');
    } else {
      return '';
    }
  },

  sortDirection: function() {
    if (this.get('sortAscending')) {
      return 'fa fa-arrow-up';
    } else {
      return 'fa fa-arrow-down';
    }
  }.property('sortAscending'),

  actions: {
    sortBy: function(property) {
      var isAscending = !this.get('sortAscending');

      this.set('sortProperties', [property]);
      this.set('sortAscending', isAscending);
      this.set('page', 1);
    },

    nextPage: function() {
      this.incrementProperty('page');
    },

    previousPage: function() {
      this.decrementProperty('page');
    },

    deleteRound: function(round) {
      if (window.confirm('Are you sure you want to delete this round?')) {
        round.then(function(round) {
          round.get('scorecards').map(function(scorecard) {
            scorecard.deleteRecord();
          });
          round.destroyRecord();
        });
      }
    }
  }
});

export default CourseRoundsController;
