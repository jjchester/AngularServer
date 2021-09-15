import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Wt1Component } from './wt1.component';

describe('Wt1Component', () => {
  let component: Wt1Component;
  let fixture: ComponentFixture<Wt1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Wt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
