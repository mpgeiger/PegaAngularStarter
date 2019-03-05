import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPGLayoutComponent } from './mpg-layout.component';

describe('MPGLayoutComponent', () => {
  let component: MPGLayoutComponent;
  let fixture: ComponentFixture<MPGLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPGLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPGLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
