import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./layouts/dashboard/dashboard.routes').then((r) => r.routesDashboard),
  },
  {
    path: 'signin',
    loadChildren: () => import('./layouts/signin/signin.routes').then(r => r.routesSignin)
  }
];
