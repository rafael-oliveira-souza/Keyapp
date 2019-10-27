import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChavesPage } from './chaves.page';

describe('ChavesPage', () => {
  let component: ChavesPage;
  let fixture: ComponentFixture<ChavesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChavesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
