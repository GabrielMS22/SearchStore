import { TestBed } from '@angular/core/testing';

import { LoginUsersService } from './login-users.service';

describe('LoginUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUsersService = TestBed.get(LoginUsersService);
    expect(service).toBeTruthy();
  });
});
