import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var self = this;

    if (!navigator.geolocation){
      self.set('geolocationMessage', 'Geolocation is not supported by your browser');
    }

    function success(position) {
      var latitude  = position.coords.latitude,
          longitude = position.coords.longitude;

      self.store.query('nearestCourse', {latitude: latitude, longitude: longitude}).then(function(courses) {
        self.set('nearestCourses', courses);
        self.set('geolocationMessage', '');
      });
    }

    function error() {
      self.set('geolocationMessage', 'Unable to retrieve your location');
    }

    this.set('geolocationMessage', 'Looking up local courses...');

    navigator.geolocation.getCurrentPosition(success, error);
  }
});
