import list from './todo-list.html';
import styles from './todo-list.scss';

export default {
    templateUrl: list,
    bindings: {
        items: '<',
        onUpdateTodos: '&'
    },
    controller() {
        const ctrl = this;
      
        ctrl.$onChanges = (changes) => {
            if (changes.items) {
                ctrl.items = angular.copy(ctrl.items);
            }
        };
      
        ctrl.removeItem = ({ selectedItem }) => {
            ctrl.items = ctrl.items.filter(item => item.text !== selectedItem.text);  
            ctrl.onUpdateTodos({
                $event: {
                    todos: ctrl.items
                }
            })
        };
    }
};
