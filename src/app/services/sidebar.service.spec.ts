import {TestBed} from '@angular/core/testing';

import {SidebarService} from './sidebar.service';

describe('SidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarService = TestBed.inject(SidebarService);
    expect(service).toBeTruthy();
  });
});
