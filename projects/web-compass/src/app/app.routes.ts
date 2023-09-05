import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: () => import('./layouts/dashboard/dashboard.routes').then((m) => m.routesDashboard),
  }
];
