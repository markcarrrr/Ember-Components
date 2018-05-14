import Component from '@ember/component';

export default Component.extend({
    tagName: 'form',
    classNames: ['form-wrapper'],
    classNameBindings: ['isDisabled:disabled', 'isVertical:form-vertical'],
    isDisabled: false,
    isVertical: false,
    attributeBindings: ['action', 'method', 'autocomplete', 'novalidate'],
    action: '#',
    method: 'get',
    autocomplete: 'on',
    novalidate: 'novalidate',
    submit(event) {
        event.preventDefault();
    }
});
