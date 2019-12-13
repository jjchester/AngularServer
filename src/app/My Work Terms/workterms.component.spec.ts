import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktermsComponent } from './workterms.component';

describe('ListComponent', () => {
  let component: WorktermsComponent;
  let fixture: ComponentFixture<WorktermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
