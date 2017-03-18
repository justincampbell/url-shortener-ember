import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('transitions to /urls', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'urls');
    }
  });
  route.beforeModel();
});
