import { TestBed } from '@angular/core/testing';

import { HodowlaZwierzakowService } from './hodowla-zwierzakow.service';

describe('HodowlaZwierzakowService', () => {
  let service: HodowlaZwierzakowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HodowlaZwierzakowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
