import filters from './filters.html';
import styles from './filters.scss';

export default {
    bindings: {
        currentFilter: '<',
        onFilterChange: '&'
    },
    templateUrl: filters,
    controller() {
        const ctrl = this;

        ctrl.$onInit = () => {
            ctrl.selected = ctrl.currentFilter === 'todo' ? false : true;
        };
      
        ctrl.updateFilter = () => {
            ctrl.onFilterChange({
                $event: {
                    filter: ctrl.selected ? 'todo' : 'done'
                }
            })
        };

    }
};
