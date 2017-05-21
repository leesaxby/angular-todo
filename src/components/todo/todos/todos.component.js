import todos from './todos.html';
import styles from './todos.scss';

export default {
    templateUrl: todos,
    controller(todoService) {
        const ctrl = this;

        ctrl.$onInit = () => {
            ctrl.newTodo = {
                text: ''
            }
            ctrl.todos = todoService.getTodos();
        };
        
        ctrl.addTodo = ({ todo }) => {
              ctrl.todos = [todo, ...ctrl.todos];
              ctrl.newTodo = {
                  text: ''
              }
        };
      
        ctrl.updateTodos = ({ todos }) => ctrl.todos = todos;
    }
};
