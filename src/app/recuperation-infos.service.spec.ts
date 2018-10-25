import { TestBed } from '@angular/core/testing';

import { RecuperationInfosService } from './recuperation-infos.service';

describe('RecuperationInfosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperationInfosService = TestBed.get(RecuperationInfosService);
    expect(service).toBeTruthy();
  });
});
