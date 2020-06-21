import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoListaComponente } from './empregado-lista.component';

describe('EmployeeListComponent', () => {
  let component: EmpregadoListaComponente;
  let fixture: ComponentFixture<EmpregadoListaComponente>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoListaComponente ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoListaComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
