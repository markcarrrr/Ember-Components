import Component from '@ember/component';

export default Component.extend({
    tagName: 'fieldset',
    classNameBindings: ['isCheckboxGroup:checkbox-group', 'isRadio:radio-group'],
    isCheckbox: false,
    isRadio: false
});
