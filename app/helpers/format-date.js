import { helper } from '@ember/component/helper';
import moment from 'moment';

export function formatDate(date) {
  return moment(date, 'DD-MM-YYYY').format('MMMM DD, YYYY');
}

export default helper(formatDate);
