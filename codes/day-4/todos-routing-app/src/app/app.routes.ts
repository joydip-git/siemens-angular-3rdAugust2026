import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoDetail } from './todo-detail/todo-detail';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    // { path: 'todos', component: TodoList, outlet:'mainOutlet' },
    {
        path: 'todos',
        children:
            [
                { path: '', component: TodoList },
                { path: 'view/:id', component: TodoDetail }
            ]
    },
    { path: 'home', component: Home },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: PageNotFound }

];
//{ id: "1"}
// products/categories/:cid/:pid
// { cid: "2", pid:"101"}