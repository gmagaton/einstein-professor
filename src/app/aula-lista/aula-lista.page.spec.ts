import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaListaPage } from './aula-lista.page';

describe('AulaListaPage', () => {
  let component: AulaListaPage;
  let fixture: ComponentFixture<AulaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
