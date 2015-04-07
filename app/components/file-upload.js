import Ember from "ember";
import config from 'frolfr-client/config/environment';
/* global EmberUploader */

var FileUploadComponent = EmberUploader.FileField.extend({
  url: '',
  imageUrl: null,

  filesDidChange: function() {
    var uploadUrl = config.apiHost + this.get('url');
    var files = this.get('files');
    var uploader = EmberUploader.Uploader.create({
      url: uploadUrl
    });
    var _this = this;

    if (Ember.isPresent(files)) {
      uploader.upload(files[0]).then(function(data) {
        _this.set('imageUrl', data.user.avatar_url);
      });
    }
  }.observes('files')
});

export default FileUploadComponent;
