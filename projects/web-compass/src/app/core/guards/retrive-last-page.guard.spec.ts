import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { retriveLastPageGuard } from './retrive-last-page.guard';

describe('retriveLastPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => retriveLastPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
