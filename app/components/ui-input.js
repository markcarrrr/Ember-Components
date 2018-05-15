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

        if (!this.parentView) {
            return false;
        }

        const attrs = this.parentView.attrs;
        const required = attrs.required;

        if (this.get('required') === false) {
            return false;
        }

        if (attrs && attrs.required) {
            this.set('required', required);
        }
    }
});
