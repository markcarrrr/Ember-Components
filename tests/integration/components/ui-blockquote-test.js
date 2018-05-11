import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-blockquote', function(hooks) {
  setupRenderingTest(hooks);

  test('should display a quote only', async function(assert) {
    await render(hbs`
      {{#ui-blockquote quote="quote"}}{{/ui-blockquote}}
    `);

    assert.equal(this.element.textContent.trim(), 'quote');
    assert.notOk(this.element.querySelector('footer'));
  });

  test('should display a quote and cite without a cite link', async function(assert) {
    await render(hbs`
      {{#ui-blockquote quote="quote" cite="cite"}}{{/ui-blockquote}}
    `);

    assert.equal(this.element.querySelector('blockquote > p').textContent.trim(), 'quote');
    assert.equal(this.element.querySelector('cite').textContent.trim(), 'cite');
    assert.ok(this.element.querySelector('footer'));
    assert.notOk(this.element.querySelector('cite a'));
  });

  test('should display a quote, cite and cite link', async function(assert) {
    await render(hbs`
      {{#ui-blockquote quote="quote" cite="cite" citeLink="cite-link"}}{{/ui-blockquote}}
    `);

    const citeLink = this.element.querySelector('cite a');

    assert.equal(this.element.querySelector('blockquote > p').textContent.trim(), 'quote');
    assert.equal(citeLink.textContent.trim(), 'cite');
    assert.equal(citeLink.getAttribute('href'), 'cite-link');
    assert.ok(this.element.querySelector('footer'));
    assert.ok(citeLink);
  });
});
