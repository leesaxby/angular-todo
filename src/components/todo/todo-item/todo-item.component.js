import item from './todo-item.html';
import styles from './todo-item.scss';

export default {
  bindings: {
    item: '<',
    onRemoveItem: '&'
  },
  templateUrl: item,
  controller() {
      const ctrl = this;
    
      ctrl.onChanges = (changes) => {
          if (changes.item) {
              ctrl.item = Object.assign({}, ctrl.item);
          }
      };
    
      ctrl.removeItem = () => {
          ctrl.onRemoveItem({
              $event: {
                  selectedItem: ctrl.item
              }
          })
      };
  }
};
