import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';


export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    pathMatch: 'full',
    component:Home,
    // loadComponent: ()=> {return import('./pages/home/home').then((m)=>m.Home)}

  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'about',
    component: About,
  },
];
