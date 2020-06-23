import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaEmpregadoComponente } from './atualiza-empregado.component';

describe('AtualizaEmpregadoComponente', () => {
  let component: AtualizaEmpregadoComponente;
  let fixture: ComponentFixture<AtualizaEmpregadoComponente>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaEmpregadoComponente ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaEmpregadoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
