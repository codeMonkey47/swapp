/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActorService } from './actor.service';

describe('Service: Actor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorService]
    });
  });

  it('should ...', inject([ActorService], (service: ActorService) => {
    expect(service).toBeTruthy();
  }));
});
