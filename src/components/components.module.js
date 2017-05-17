import root from './root/root.module.js'
import todo from './todo/todo.module.js'

export default angular.module('components', [
		root,
		todo
]).name;