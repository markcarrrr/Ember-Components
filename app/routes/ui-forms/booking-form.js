import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    user: service('user'),

    model() {
        return this.user.getCurrentUser().then(response => response);
    }
});
