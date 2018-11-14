import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentsPage } from './presents.page';

describe('PresentsPage', () => {
  let component: PresentsPage;
  let fixture: ComponentFixture<PresentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
