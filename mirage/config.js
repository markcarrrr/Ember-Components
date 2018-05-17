export default function() {
    this.namespace = '/api';

    this.get('/ui-tabs');

    this.get('/bookings');
    this.post('/bookings');
}
