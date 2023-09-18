import { CanActivateFn, CanLoadFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const retrivePermissionsGuardCanMatch: CanMatchFn = (route, state) => {
  const authService: AuthService = inject(AuthService)





  return true;
};
