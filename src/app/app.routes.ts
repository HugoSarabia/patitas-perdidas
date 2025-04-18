import { Routes } from '@angular/router';
import { loginGuard } from './auth/guard/login.guard';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Patitas Perdidas',
    loadComponent: () =>
      import('./home/pages/home/home.component').then(
        (m) => m.HomeComponent
      )
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./auth/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  { path: '**', redirectTo: 'home' }
];
