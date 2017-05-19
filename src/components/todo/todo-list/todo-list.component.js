import list from './todo-list.html';
import styles from './todo-list.scss';

export default {
  transclude: true,
  templateUrl: list,
  bindings: {
    items: '<'
  },
  controller() {

  }
};
