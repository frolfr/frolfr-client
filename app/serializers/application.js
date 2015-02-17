import DS from 'ember-data';

var ApplicationSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {});

export default ApplicationSerializer;
