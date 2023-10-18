import { Routes } from '@angular/router';
import { retrivePermissionsGuardCanActivate } from './core/guards/retrive-permissions.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./layouts/dashboard/dashboard.routes').then((r) => r.routesDashboard),
    // canActivate:[retrivePermissionsGuardCanActivate]
  },
  {
    path: 'signin',
    loadChildren: () => import('./layouts/signin/signin.routes').then(r => r.routesSignin)
  },
  {
    path: '404',
    loadComponent: () => import('./layouts/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo:'404'
  }

];
