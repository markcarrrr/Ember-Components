import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-button', function(hooks) {
  setupRenderingTest(hooks);

  test('should be able to set type of button', async function(assert) {
    await render(hbs`
      {{ui-button type="submit"}}
    `);

    assert.equal(this.element.querySelector('button').getAttribute('type'), 'submit');
  });

  test('should be able to pass in button text', async function(assert) {
    await render(hbs`
      {{ui-button buttonText="Button text"}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'Button text');
  });

  test('should be able to pass in supporting text', async function(assert) {
    await render(hbs`
      {{ui-button supportingText="Supporting text"}}
    `);

    assert.equal(this.element.querySelector('p').textContent.trim(), 'Supporting text');
  });
});
