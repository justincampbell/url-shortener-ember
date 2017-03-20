import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    shortenUrl(value) {
      let store = this.get('store');
      let url = store.createRecord('url', { long: value });
      url.save();

      this.set('value', null);
    }
  }
});
