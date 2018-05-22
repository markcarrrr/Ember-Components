import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    formValidation: service('form-validation'),

    classNames: ['datepicker-wrapper', 'form-field'],

    disableDates: computed(function() {
        return this.get('disable') || [];
    }),

    enableDates: computed(function() {
        return this.get('enable') || [];
    }),

    setAltInput: computed(function() {
        return this.get('altInput') !== false ? true : false;
    }),

    setClickOpens: computed(function() {
        return this.get('clickOpens') !== false ? true : false;
    }),

    isValid: true,

    actions: {
        onReady(a, b, config) {
            const isRequired = config.config.required;
            const altInput = config.altInput;

            if (isRequired) {
                altInput.setAttribute('required', 'required');
            }

            altInput.addEventListener('blur', () => {
                this.formValidation.isInputValid(altInput);
            }, false);
        },

        onChange(a, b, config) {
            this.formValidation.isInputValid(config.altInput);
        }
    }
});
