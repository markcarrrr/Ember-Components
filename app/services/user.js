import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    store: service('store'),

    getCurrentUser() {
        return this.get('store').findRecord('user', '1');
    }
});
