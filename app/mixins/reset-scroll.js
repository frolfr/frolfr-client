import Ember from 'ember';

var ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});

export default ResetScroll;
