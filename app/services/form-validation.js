import Service from '@ember/service';

export default Service.extend({
    errorClassName: 'form-input--error',

    isFormValid(component, form) {
        let isValid = true;
        const inValidElements = [];

        form.querySelectorAll('input, select').forEach(item => {
            const tagName = item.tagName.toLowerCase();

            if (tagName === 'input') {
                if (item.validity.valid === false) {
                    isValid = false;

                    this.isInputValid(item);

                    inValidElements.push(item);
                }
            } else {
                if (item.value == 0) {
                    isValid = false;

                    this.isSelectValid(item);

                    inValidElements.push(item);
                }
            }
        });

        if (isValid) {
            component.set('isValid', true);
        } else {
            /*
            * Set focus on first element that has an error.
            */
            inValidElements[0].focus();

            component.set('isValid', false);
        }
    },

    isInputValid(element) {
        const validity = element.validity;
        let errorMessage = '';

        if (validity.valueMissing) {
            element.classList.add(this.get('errorClassName'));

            errorMessage = 'Please add information to this field.';
        } else {
            element.classList.remove(this.get('errorClassName'));
        }

        element.nextSibling.nextSibling.innerHTML = errorMessage;
    },

    isSelectValid(element) {
        let errorMessage = '';

        if (element.value == 0) {
            element.classList.add(this.get('errorClassName'));

            errorMessage = 'Please select an option.';
        } else {
            element.classList.remove(this.get('errorClassName'));
        }

        element.nextSibling.nextSibling.innerHTML = errorMessage;
    }
});
