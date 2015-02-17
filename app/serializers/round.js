import ApplicationSerializer from './application';

var RoundSerializer = ApplicationSerializer.extend({
  attrs: { players: { embedded: 'always' } }
});

export default RoundSerializer;
