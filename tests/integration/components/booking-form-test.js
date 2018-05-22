import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | booking-form', function(hooks) {
  setupRenderingTest(hooks);

  test('Should contain a datepicker', async function(assert) {
    await render(hbs`{{booking-form}}`);

    assert.ok(this.element.querySelector('.form-datepicker'));
  });
});
