import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    addressLine1: attr('string'),
    addressLine2: attr('string'),
    city: attr('string'),
    postcode: attr('string'),
    email: attr('string'),
    homePhone: attr('string'),
    mobile: attr('string'),
    bookings: attr()
});
