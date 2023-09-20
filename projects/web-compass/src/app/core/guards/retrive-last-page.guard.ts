import { CanActivateFn } from '@angular/router';

export const retriveLastPageGuard: CanActivateFn = (route, state) => {
  return true;
};
