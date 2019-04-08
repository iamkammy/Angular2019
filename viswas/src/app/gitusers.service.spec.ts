import { TestBed } from '@angular/core/testing';

import { GitusersService } from './gitusers.service';

describe('GitusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitusersService = TestBed.get(GitusersService);
    expect(service).toBeTruthy();
  });
});
