import ApplicationSerializer from '/app/serializers/application';

var RoundSerializer = ApplicationSerializer.extend({
  attrs: { players: { embedded: 'always' } }
});

export default RoundSerializer;
