import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCursoComponent } from './listagem-curso.component';

describe('ListagemCursoComponent', () => {
  let component: ListagemCursoComponent;
  let fixture: ComponentFixture<ListagemCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
