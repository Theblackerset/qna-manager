import { TestBed } from '@angular/core/testing';

import { QnaMakerService } from './qna-maker.service';

describe('QnaMakerServiceTsService', () => {
  let service: QnaMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QnaMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
