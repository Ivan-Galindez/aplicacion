import { TestBed } from '@angular/core/testing';

import { ConsultaEdificioService } from './consulta-edificio.service';

describe('ConsultaEdificioService', () => {
  let service: ConsultaEdificioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaEdificioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
