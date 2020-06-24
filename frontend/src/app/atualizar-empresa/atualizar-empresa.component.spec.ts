import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEmpresaComponent } from './atualizar-empresa.component';

describe('AtualizarEmpresaComponent', () => {
  let component: AtualizarEmpresaComponent;
  let fixture: ComponentFixture<AtualizarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
