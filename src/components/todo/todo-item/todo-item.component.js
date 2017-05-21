import item from './todo-item.html';
import styles from './todo-item.scss';

export default {
    bindings: {
        item: '<',
        onSelectItem: '&'
    },
    templateUrl: item,
    controller() {
        const ctrl = this;

        ctrl.onChanges = (changes) => {
            if (changes.item) {
                ctrl.item = Object.assign({}, ctrl.item);
            }
        };

        ctrl.selectItem = () => {
            ctrl.onSelectItem({
                $event: {
                    selectedItem: ctrl.item
                }
            })
        };
    }
};
