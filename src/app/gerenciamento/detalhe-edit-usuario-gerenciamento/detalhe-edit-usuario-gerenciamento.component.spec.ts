import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEditUsuarioGerenciamentoComponent } from './detalhe-edit-usuario-gerenciamento.component';

describe('DetalheEditUsuarioGerenciamentoComponent', () => {
  let component: DetalheEditUsuarioGerenciamentoComponent;
  let fixture: ComponentFixture<DetalheEditUsuarioGerenciamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEditUsuarioGerenciamentoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEditUsuarioGerenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
