import Component from '@ember/component';

export default Component.extend({
    tagName: 'fieldset',
    classNameBindings: ['isCheckboxGroup:checkbox-group', 'isRadio:radio-group', 'isVertical:fieldset-vertical'],
    isCheckbox: false,
    isRadio: false,
    isVertical: false
});
