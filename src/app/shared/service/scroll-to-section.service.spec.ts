import { TestBed } from '@angular/core/testing';

import { ScrollToSectionService } from './scroll-to-section.service';

describe('ScrollToSectionService', () => {
  let service: ScrollToSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollToSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
