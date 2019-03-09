import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistpanelsectionComponent } from './worklistpanelsection.component';

describe('WorklistpanelsectionComponent', () => {
  let component: WorklistpanelsectionComponent;
  let fixture: ComponentFixture<WorklistpanelsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistpanelsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistpanelsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
