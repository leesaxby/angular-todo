import todo from './todo-form.html';
import styles from './todo-form.scss';

export default {
    templateUrl: todo,
    bindings: {
      todo: '<',
      onAddTodo: '&'
    },
    controller() {
        const ctrl = this;

        ctrl.$onChanges = (changes) => {
            ctrl.todo = Object.assign({}, ctrl.todo);
        }
        
        ctrl.addTodo = () => {
            if (ctrl.todo.text) {
                ctrl.onAddTodo({
                    $event: {
                        todo: ctrl.todo
                    }
                })
            }
        }
    }
};
