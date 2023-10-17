import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { retrivePermissionsGuard } from './retrive-permissions.guard';

describe('retrivePermissionsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => retrivePermissionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
