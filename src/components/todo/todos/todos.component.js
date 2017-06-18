import todos from './todos.html';
import styles from './todos.scss';

export default {
    templateUrl: todos,
    controller($stateParams, $location, $timeout, todoService) {
        const ctrl = this;

        ctrl.$onInit = () => {          
            ctrl.todos = todoService.getTodos();
          
            if (!$stateParams.filter) {
                $location.search('filter', 'todo');
            }

            ctrl.currentFilter = $stateParams.filter;
            
            todoService.onUpdate(todos => {
                $timeout(() => ctrl.todos = todos);              
            })

            ctrl.newTodo = getNewTodo(ctrl.todos);
        };
      
        ctrl.addTodo = ({ todo }) => {
            ctrl.todos = [todo, ...ctrl.todos];
            ctrl.newTodo = getNewTodo(ctrl.todos);
            todoService.updateTodos(ctrl.todos);
        };
      
        ctrl.updateTodos = ({ todos }) => {
            ctrl.todos = todos;
            todoService.updateTodos(ctrl.todos);
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
