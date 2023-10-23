import { Routes } from '@angular/router';

export const routesDashboard: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
    data: {
    },
    children: [
      {
        path: '',
        loadComponent: () => import('../../components/home/home.component').then(c => c.HomeComponent),
      }
    ]
  },

];
