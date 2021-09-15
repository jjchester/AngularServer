import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Wt5Component } from './wt5.component';

describe('Wt5Component', () => {
  let component: Wt5Component;
  let fixture: ComponentFixture<Wt5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Wt5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
