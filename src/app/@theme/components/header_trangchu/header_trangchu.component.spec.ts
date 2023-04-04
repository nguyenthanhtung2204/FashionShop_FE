/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Header_trangchuComponent } from './header_trangchu.component';

describe('Header_trangchuComponent', () => {
  let component: Header_trangchuComponent;
  let fixture: ComponentFixture<Header_trangchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header_trangchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header_trangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
