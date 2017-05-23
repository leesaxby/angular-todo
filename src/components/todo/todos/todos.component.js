import todos from './todos.html';
import styles from './todos.scss';

export default {
    templateUrl: todos,
    controller($stateParams, $location, todoService) {
        const ctrl = this;

        ctrl.$onInit = () => {
            if (!$stateParams.filter) {
                $location.search('filter', 'todo');
            }

            ctrl.currentFilter = $stateParams.filter;
            ctrl.todos = todoService.getTodos();
            ctrl.newTodo = getNewTodo(ctrl.todos);
        };
      
        ctrl.addTodo = ({ todo }) => {
              todoService.setTodos([todo, ...ctrl.todos]);
              ctrl.todos = todoService.getTodos()
              ctrl.newTodo = getNewTodo(ctrl.todos);
        };
      
        ctrl.updateTodos = ({ todos }) => {
            todoService.setTodos(todos);
            ctrl.todos = todoService.getTodos()
        };
    
        ctrl.updateFilter = (filter) => $location.search(filter);
      
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
