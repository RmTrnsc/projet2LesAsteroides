import { TestBed } from '@angular/core/testing';

import { RecuperationTitleService } from './recuperation-title.service';

describe('RecuperationTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperationTitleService = TestBed.get(RecuperationTitleService);
    expect(service).toBeTruthy();
  });
});
