import angular from 'angular';
import router from 'angular-ui-router';

import todoService from './todo.service.js';

import todoForm from './todo-form/todo-form.component.js';
import list from './list/list.component.js';
import item from './item/item.component.js';

export default angular.module('todo', [router])
        .service('todoService', todoService)
        .component('todoForm', todoForm)
        .component('list', list)
        .component('item', item)
        .config(function ($stateProvider) {
            $stateProvider
                .state('todo', {
                    url: '/todo',
                    component: 'todoForm'
                })
        }).name;
