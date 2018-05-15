import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{ui-input}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('should be able to set individual inputs required state to false in group set as required', async function(assert) {
    await render(hbs`
      {{#ui-fieldset required=true}}
        {{ui-input required=false}}
        {{ui-input}}
      {{/ui-fieldset}}
    `);

    assert.equal(this.element.querySelector('input').getAttribute('required'), null, 'first input required state should be unset.');
    assert.equal(this.element.querySelectorAll('input')[1].getAttribute('required'), "", 'second input required state should be set.');
  });

  test('should be able to set label text', async function(assert) {
    await render(hbs`{{ui-input labelText="Label text"}}`);

    assert.equal(this.element.textContent.trim(), 'Label text');
  });

  test('should be able to hide label text', async function(assert) {
    await render(hbs`{{ui-input labelText="Label text" hideLabel=true}}`);

    assert.notEqual(this.element.querySelector('label > span').getAttribute('class').indexOf('visually-hidden'), -1, 'should contain class to visually hide text.');
  });
});
