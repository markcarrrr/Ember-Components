import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['input-wrapper', 'form-field'],
    classNameBindings: ['typeClass'],
    type: 'text',
    typeClass: computed(function() {
        return 'form-field--' + this.get('type');
    })
});
