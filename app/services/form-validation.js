import Service from '@ember/service';

export default Service.extend({
    isFormValid(component, form) {
        let isValid = true;
        const inValidElements = [];

        form.querySelectorAll('input').forEach(item => {
            if (item.validity.valid === false) {
                isValid = false;

                this.isInputValid(item);

                inValidElements.push(item);
            }
        });

        if (isValid) {
            component.set('isValid', true);
        } else {
            inValidElements[0].focus();

            component.set('isValid', false);
        }
    },

    isInputValid(element) {
        const validity = element.validity;
        let errorMessage = '';

        if (validity.valueMissing) {
            element.classList.add('form-input--error');

            errorMessage = 'Please add information to this field.';
        } else {
            element.classList.remove('form-input--error');
        }

        element.nextSibling.nextSibling.innerHTML = errorMessage;
    }
});
