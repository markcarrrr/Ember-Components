import Component from '@ember/component';

export default Component.extend({
    tagName: 'form',
    classNames: ['form-wrapper'],
    classNameBindings: ['isDisabled:disabled', 'isVertical:form-vertical'],
    isDisabled: false,
    isVertical: false,
    attributeBindings: ['method', 'autocomplete', 'novalidate'],
    method: 'post',
    autocomplete: 'on',
    novalidate: 'novalidate',
});
