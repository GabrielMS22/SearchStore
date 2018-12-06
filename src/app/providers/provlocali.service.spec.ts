import { TestBed } from '@angular/core/testing';

import { ProvlocaliService } from './provlocali.service';

describe('ProvlocaliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvlocaliService = TestBed.get(ProvlocaliService);
    expect(service).toBeTruthy();
  });
});
