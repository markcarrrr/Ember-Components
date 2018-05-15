import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['input-wrapper', 'form-field', 'form-field--select'],
    options: computed(function() {
        return JSON.parse(this.get('setOptions'));
    })
});
