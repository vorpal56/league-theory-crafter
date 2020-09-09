import { TestBed } from '@angular/core/testing';

import { DamageCalculationsService } from './damage-calculations.service';

describe('DamageCalculationsService', () => {
  let service: DamageCalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageCalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
