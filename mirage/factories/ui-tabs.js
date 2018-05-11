import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return faker.name.lastName();
    },
    content() {
        return faker.lorem.paragraph();
    }
});
