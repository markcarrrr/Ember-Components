import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
    form: alias('model'),
    onSaveError: '',

    actions: {
        onSubmit(event) {
            event.preventDefault();

            const newRecord = this.get('store').createRecord('booking', {
                firstName: this.get('form.firstName'),
                lastName: this.get('form.lastName'),
                phone: this.get('form.phone'),
                email: this.get('form.email'),
                displayDate: this.get('form.displayDate'),
                date: this.get('form.date')
            });

            newRecord.save();
        },

        /*
        * 
        * When the calendar is closed get and set the hidden input date
        * and the user friendly displayed date.
        */
        setBookingDate(altInputValue, hiddenInputValue) {
            this.set('form.displayDate', altInputValue);
            this.set('form.date', hiddenInputValue);
        }
    }
});
