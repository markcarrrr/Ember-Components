import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-date', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('should format a valid date', async function(assert) {
    this.set('inputValue', '01-01-2001');

    await render(hbs`{{format-date inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'January 01, 2001');
  });
});
