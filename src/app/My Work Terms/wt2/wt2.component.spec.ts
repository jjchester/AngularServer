import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wt2Component } from './wt2.component';

describe('Wt2Component', () => {
  let component: Wt2Component;
  let fixture: ComponentFixture<Wt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
