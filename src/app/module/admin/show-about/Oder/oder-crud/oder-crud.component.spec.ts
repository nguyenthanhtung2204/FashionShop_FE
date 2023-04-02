/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OderCrudComponent } from './oder-crud.component';

describe('OderCrudComponent', () => {
  let component: OderCrudComponent;
  let fixture: ComponentFixture<OderCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
