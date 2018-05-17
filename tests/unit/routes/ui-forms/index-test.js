import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ui-forms/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ui-forms/index');
    assert.ok(route);
  });
});
