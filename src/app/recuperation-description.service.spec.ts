import { TestBed } from '@angular/core/testing';

import { RecuperationDescriptionService } from './recuperation-description.service';

describe('RecuperationDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperationDescriptionService = TestBed.get(RecuperationDescriptionService);
    expect(service).toBeTruthy();
  });
});
