import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-datepicker', function(hooks) {
  setupRenderingTest(hooks);

  test('should show label text as default', async function(assert) {
    await render(hbs`{{ui-datepicker}}`);

    assert.equal(this.element.textContent.trim(), 'Choose a date');
  });

  test('should be able to change label text', async function(assert) {
    await render(hbs`{{ui-datepicker labelText='Pick a date'}}`);

    assert.equal(this.element.textContent.trim(), 'Pick a date');
  });
});
