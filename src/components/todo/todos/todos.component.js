import todos from './todos.html';
import styles from './todos.scss';

export default {
    templateUrl: todos,
    controller(todoService) {
        const ctrl = this;

        ctrl.$onInit = () => {
            ctrl.todos = todoService.getTodos();
            ctrl.newTodo = getNewTodo(ctrl.todos);
        };
        
        ctrl.addTodo = ({ todo }) => {
              ctrl.todos = [todo, ...ctrl.todos];
              ctrl.newTodo = getNewTodo(ctrl.todos);
        };
      
        ctrl.updateTodos = ({ todos }) => ctrl.todos = todos;
    
        const getNewTodo = (todos) => {
            const ids = todos.map(todo => todo.id)
            return {
                id: Math.max(...ids) + 1,
                text: '',
                selected: false
            }
        };
    }
};
