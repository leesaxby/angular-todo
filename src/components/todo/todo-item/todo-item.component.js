import item from './todo-item.html';
import styles from './todo-item.scss';

export default {
  bindings: {
    item: '<'
  },
  templateUrl: item,
  controller() {
    console.log(this.item)
  }
};
