import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircumferenceComponent } from './circumference.component';

describe('CircumferenceComponent', () => {
  let component: CircumferenceComponent;
  let fixture: ComponentFixture<CircumferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircumferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircumferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
