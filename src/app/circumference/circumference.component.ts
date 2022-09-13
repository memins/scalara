import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-circumference',
  templateUrl: './circumference.component.html',
  styleUrls: ['./circumference.component.scss']
})
export class CircumferenceComponent extends ViewComponent implements OnInit {
 
  diameter = 0;
  override reset() {
    this.step = 1;
    this.diameter = 0;
  }

  override canStepChange(step: number) {
    if (this.step == 2 && step > 2) {
      return this.diameter > 0;
    }
    return true;
  }

}
