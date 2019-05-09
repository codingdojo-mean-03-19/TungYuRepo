import { TestBed } from '@angular/core/testing';

import { RouteTreeService } from './route-tree.service';

describe('RouteTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteTreeService = TestBed.get(RouteTreeService);
    expect(service).toBeTruthy();
  });
});
