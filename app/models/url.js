import DS from 'ember-data';

export default DS.Model.extend({
  short: DS.attr(),
  long: DS.attr(),

  shortUrl: Ember.computed(function() {
    return "http://ur.ls/g/" + this.get('short');
  }),

  shortDisplay: Ember.computed(function() {
    return "ur.ls/g/" + this.get('short');
  }),

  longDisplay: Ember.computed(function() {
    return this.get('long');
  })
});
