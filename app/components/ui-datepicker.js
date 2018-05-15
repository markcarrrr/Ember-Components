import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
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
    })
});
