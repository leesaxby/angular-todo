import todos from './todos.html';
import styles from './todos.scss';

export default {
    templateUrl: todos,
    controller(todoService) {
        const ctrl = this;

        ctrl.$onInit = () => {
            ctrl.todos = todoService.getTodos();
        }


    }
};
