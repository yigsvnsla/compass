import { Routes } from '@angular/router';

export const routesDashboard: Routes = [
  {
    path: "",
    loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
  },
];
