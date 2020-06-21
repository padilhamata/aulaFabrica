import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeteDetalhesempregado} from './empregado-detalhes.component';

describe('EmployeeDetailsComponent', () => {
  let component: ComponeteDetalhesempregado;
  let fixture: ComponentFixture<ComponeteDetalhesempregado>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponeteDetalhesempregado ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponeteDetalhesempregado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
