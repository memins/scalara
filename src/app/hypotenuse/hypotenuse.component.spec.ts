import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypotenuseComponent } from './hypotenuse.component';

describe('HypotenuseComponent', () => {
  let component: HypotenuseComponent;
  let fixture: ComponentFixture<HypotenuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypotenuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypotenuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
