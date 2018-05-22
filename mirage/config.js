export default function() {
    this.namespace = '/api';

    this.get('/users');
    this.get('/users/:id');
    this.patch('/users/:id');

    this.get('/ui-tabs');

    this.get('/bookings');
    this.post('/bookings');
}
