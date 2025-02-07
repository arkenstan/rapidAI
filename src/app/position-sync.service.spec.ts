import { TestBed } from '@angular/core/testing';

import { PositionSyncService } from './position-sync.service';

describe('PositionSyncService', () => {
  let service: PositionSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
