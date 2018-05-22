import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    formValidation: service('form-validation'),
    classNames: ['input-wrapper', 'form-field'],

    classNameBindings: ['typeClass'],

    typeClass: computed(function() {
        return 'form-field--' + this.get('type');
    }),

    type: 'text',

    init() {
        this._super(...arguments);

        this.setRequired();
    },

    setRequired() {
        const parentView = this.parentView;

        /*
        * If there's no parentView or the parentView isn't a fieldset or if
        * the input isn't set to be 'required' then let's do nothing.
        */
        if (!parentView || parentView.tagName !== 'fieldset' || this.get('required') === false) {
            return false;
        }

        const attrs = parentView.attrs;
        const required = attrs.required;

        if (attrs && attrs.required) {
            this.set('required', required);
        }
    },

    actions: {
        onBlur(event) {
            this.formValidation.isInputValid(event.target);
        },

        onKeyUp(event) {
            this.formValidation.isInputValid(event.target);
        }
    }
});
