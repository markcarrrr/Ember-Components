import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    phone: attr('string'),
    email: attr('string'),
    bookingDate: attr('date')
});
