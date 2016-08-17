import Ember from 'ember';

var ReviewEditController = Ember.Controller.extend({
  ratingChoices: [1,2,3,4,5,6,7,8,9,10],

  actions: {
    saveChanges: function () {
      var _this = this;
      var review = this.get('model');
      review.save().then(function () {
        _this.transitionToRoute('reviews.index');
      });
    },

    cancel: function() {
      this.get('model').rollback();
    }
  }

});

export default ReviewEditController;
