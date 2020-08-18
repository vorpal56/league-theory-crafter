import { TestBed } from '@angular/core/testing';

import { RunesService } from './runes.service';

describe('RunesService', () => {
  let service: RunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
