import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ui-tabs');
  this.route('ui-blockquote');
  this.route('ui-datepicker');
  this.route('ui-forms', function() {
    this.route('booking-form');
  });
});

export default Router;
