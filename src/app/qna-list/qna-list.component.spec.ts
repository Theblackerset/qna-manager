/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QnaListComponent } from './qna-list.component';

describe('QnaListComponent', () => {
  let component: QnaListComponent;
  let fixture: ComponentFixture<QnaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
