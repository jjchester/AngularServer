import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Wt3Component } from './wt3.component';

describe('Wt3Component', () => {
  let component: Wt3Component;
  let fixture: ComponentFixture<Wt3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Wt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
