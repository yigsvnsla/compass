import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { StateWebCompass } from '../store';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../store/selectors/auth.selectors';

export const retrivePermissionsGuardCanActivate: CanActivateFn = async (route, state) => {
  const authService: AuthService = inject(AuthService)
  const router: Router = inject(Router)
  const store: Store<StateWebCompass> = inject(Store<StateWebCompass>)
  const token = store.selectSignal(selectAuthToken)
  if (!token()) return router.createUrlTree(['/signin']);
  const reqSession = await firstValueFrom(authService.session())
  return !!reqSession || router.createUrlTree(['/signin'])
};
