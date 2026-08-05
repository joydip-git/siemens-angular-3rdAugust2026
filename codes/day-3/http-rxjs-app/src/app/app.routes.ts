import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoDetail } from './todo-detail/todo-detail';

export const routes: Routes = [
    // { path: 'todos', component: TodoList, outlet:'mainOutlet' },
    { path: 'todos', component: TodoList },
    { path: 'todos/view/:id', component: TodoDetail },
    { path: '', pathMatch: 'full', redirectTo: '/todos' },

];
