import { TestBed } from '@angular/core/testing';

import { ContentFacade } from './content-facade.service';

describe('ContentFacadeService', () => {
  let service: ContentFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
