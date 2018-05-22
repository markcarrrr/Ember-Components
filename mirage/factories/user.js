import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    firstName() {
        return faker.name.firstName();
    },

    lastName() {
        return faker.name.lastName();
    },

    addressLine1() {
        return faker.address.streetAddress();
    },

    city() {
        return faker.address.city();
    },

    postcode() {
        return faker.address.zipCode();
    },

    email() {
        return faker.internet.email();
    },

    homePhone() {
        return faker.phone.phoneNumber();
    },

    mobile() {
        return faker.phone.phoneNumber();
    },

    bookings() {
        return [];
    }
});
