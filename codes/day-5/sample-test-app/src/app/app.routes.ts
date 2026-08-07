import { Routes } from '@angular/router';
import { Start } from './start/start';

export const routes: Routes = [
    {
        path: 'start', component: Start
    },
    {
        path: '', pathMatch: 'full', redirectTo: '/start'
    }
];
