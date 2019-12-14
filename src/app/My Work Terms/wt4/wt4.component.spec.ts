import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wt4Component } from './wt4.component';

describe('Wt4Component', () => {
  let component: Wt4Component;
  let fixture: ComponentFixture<Wt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
