import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorksComponent } from '../pages/works/works.component';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'works',
        component: WorksComponent
    },
];
