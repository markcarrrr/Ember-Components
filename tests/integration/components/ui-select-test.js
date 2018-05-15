import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-select', function(hooks) {
  setupRenderingTest(hooks);

  test('should be able to add label text', async function(assert) {
    await render(hbs`
      {{ui-select
        labelText="Label text"
        setOptions='[{"text": "Option 1", "value": 1}, {"text": "Option 2", "value": 2}, {"text": "Option 3", "value": 3}]'
      }}
    `);

    assert.equal(this.element.querySelector('label > span').textContent.trim(), 'Label text');
  });
});
