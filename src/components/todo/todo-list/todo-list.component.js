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
      
        ctrl.selectItem = ({ selectedItem }) => {
            const item = ctrl.items.find(item => item.id === selectedItem.id);  
            item.selected = !item.selected;
            
            ctrl.onUpdateTodos({
                $event: {
                    todos: ctrl.items
                }
            })
        };
    }
};
