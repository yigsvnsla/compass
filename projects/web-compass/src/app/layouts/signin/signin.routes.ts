import { Routes } from "@angular/router";

export const routesSignin: Routes = [
  {
    path: '',
    loadComponent: () => import('./signin.component').then(c => c.SigninComponent)
  }
]
