import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
    user: service('user'),

    store: service('store'),

    formValidation: service('form-validation'),

    form: alias('model'),

    isValid: true,

    init() {
        this._super(...arguments);

        // this.user.getCurrentUser().then(response => {
        //     this.setForm(response);
        // });
    },

    setForm(currentUser) {
        this.set('form.firstName', currentUser.firstName);
        this.set('form.lastName', currentUser.lastName);
        this.set('form.phone', currentUser.mobile);
        this.set('form.email', currentUser.email);
    },

    actions: {
        onSubmit(event) {
            event.preventDefault();

            this.formValidation.isFormValid(this, event.target);

            if (this.get('isValid')) {
                const newRecord = this.get('store').createRecord('booking', {
                    firstName: this.get('form.firstName'),
                    lastName: this.get('form.lastName'),
                    phone: this.get('form.phone'),
                    email: this.get('form.email'),
                    date: this.get('form.date')
                });

                newRecord.save();
            }
        },

        /*
        *
        * When the calendar is closed set the hidden input date.
        */
        setBookingDate(altInputValue, hiddenInputValue) {
            this.set('form.date', hiddenInputValue);
        }
    }
});
