import angular from 'angular';
import router from 'angular-ui-router';

import todoService from './todo.service.js';

import todos from './todos/todos.component.js';
import todoForm from './todo-form/todo-form.component.js';
import list from './todo-list/todo-list.component.js';
import item from './todo-item/todo-item.component.js';

export default angular.module('todo', [router])
        .service('todoService', todoService)
        .component('todos', todos)
        .component('todoForm', todoForm)
        .component('todoList', list)
        .component('todoItem', item)
        .config(function ($stateProvider) {
            $stateProvider
                .state('todo', {
                    url: '/todo',
                    component: 'todos'
                })
        }).name;
