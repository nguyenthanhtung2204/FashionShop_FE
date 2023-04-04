/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Header_ClientComponent } from './Header_Client.component';

describe('Header_ClientComponent', () => {
  let component: Header_ClientComponent;
  let fixture: ComponentFixture<Header_ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header_ClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header_ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
