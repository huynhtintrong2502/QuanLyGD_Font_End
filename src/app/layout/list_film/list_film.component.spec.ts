/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { List_filmComponent } from './list_film.component';

describe('List_filmComponent', () => {
  let component: List_filmComponent;
  let fixture: ComponentFixture<List_filmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List_filmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List_filmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
