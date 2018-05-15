import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['input-wrapper', 'form-field'],
    classNameBindings: ['typeClass'],
    type: 'text',
    typeClass: computed(function() {
        return 'form-field--' + this.get('type');
    }),
    init() {
        this._super(...arguments);

        const parentView = this.parentView;

        if (!parentView || parentView.tagName !== 'fieldset' || this.get('required') === false) {
            return false;
        }

        const attrs = parentView.attrs;
        const required = attrs.required;

        if (attrs && attrs.required) {
            this.set('required', required);
        }
    }
});
