import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-hypotenuse',
  templateUrl: './hypotenuse.component.html',
  styleUrls: ['./hypotenuse.component.scss']
})
export class HypotenuseComponent extends ViewComponent implements OnInit {
  adjacent = 0;
  opposite = 0;

  override reset() {
    this.step = 1;
    this.adjacent = 0;
    this.opposite = 0;
  }

  override canStepChange(step: number) {
    if (this.step == 2 && step > 2) {
      return this.adjacent > 0;
    } else if (this.step == 3 && step > 3) {
      return this.opposite > 0;
    }
    return true;
  }

}
