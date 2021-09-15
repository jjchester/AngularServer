import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorktermsComponent } from './workterms.component';

describe('ListComponent', () => {
  let component: WorktermsComponent;
  let fixture: ComponentFixture<WorktermsComponent>;

  beforeEach(waitForAsync(() => {
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
