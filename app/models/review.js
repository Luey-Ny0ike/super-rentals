import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  ratings: DS.attr(),
  content: DS.attr(),
});
