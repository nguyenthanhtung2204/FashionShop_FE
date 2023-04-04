/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Footer_trangchuComponent } from './footer_trangchu.component';

describe('Footer_trangchuComponent', () => {
  let component: Footer_trangchuComponent;
  let fixture: ComponentFixture<Footer_trangchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer_trangchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer_trangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
