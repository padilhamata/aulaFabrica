import { TestBed } from '@angular/core/testing';

import { EmpregadoServico } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpregadoServico = TestBed.get(EmpregadoServico);
    expect(service).toBeTruthy();
  });
});
