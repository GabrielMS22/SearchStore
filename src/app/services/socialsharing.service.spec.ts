import { TestBed } from '@angular/core/testing';

import { SocialsharingService } from './socialsharing.service';

describe('SocialsharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialsharingService = TestBed.get(SocialsharingService);
    expect(service).toBeTruthy();
  });
});
