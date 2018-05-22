import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service('store'),

    formValidation: service('form-validation'),

    isValid: true,

    actions: {
        onSubmit(event) {
            event.preventDefault();

            this.formValidation.isFormValid(this, event.target);

            //console.log(this.get('setValue'));

            if (this.get('isValid')) {
                this.user.bookings.pushObject({
                    type: this.get('bookingType'),
                    date: this.get('bookingDate')
                });

                this.user.save();
            }
        },

        /*
        *
        * When the calendar is closed set the hidden input date.
        */
        setBookingDate(altInputValue, hiddenInputValue) {
            this.set('bookingDate', hiddenInputValue);
        }
    }
});
