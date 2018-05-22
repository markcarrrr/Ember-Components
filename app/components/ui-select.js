import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    formValidation: service('form-validation'),

    classNames: ['input-wrapper', 'form-field', 'form-field--select'],

    setValue: null,

    options: computed(function() {
        return JSON.parse(this.get('setOptions'));
    }),

    actions: {
        onBlur(event) {
            this.formValidation.isSelectValid(event.target);
        },

        onChange(event) {
            const element = event.target;

            this.set('value', element.value);

            this.formValidation.isSelectValid(element);
        }
    }
});
