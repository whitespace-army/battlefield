/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SandwichService } from './sandwich.service';

describe('FeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SandwichService]
    });
  });

  it('should ...', inject([SandwichService], (service: SandwichService) => {
    expect(service).toBeTruthy();
  }));
});
