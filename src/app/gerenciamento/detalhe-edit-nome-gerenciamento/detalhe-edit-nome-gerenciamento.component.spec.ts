import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEditNomeGerenciamentoComponent } from './detalhe-edit-nome-gerenciamento.component';

describe('DetalheEditNomeGerenciamentoComponent', () => {
  let component: DetalheEditNomeGerenciamentoComponent;
  let fixture: ComponentFixture<DetalheEditNomeGerenciamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEditNomeGerenciamentoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEditNomeGerenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
