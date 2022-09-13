import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})

export class RemainderComponent extends ViewComponent implements OnInit {
  mainNumber = 0;
  divisor=0;

  override reset() {
    this.step = 1;
    this.mainNumber = 0;
    this.divisor=0;
  }

  override canStepChange(step: number) {
    if (this.step == 2 && step > 2) {
      return this.mainNumber > 0;
    } else if (this.step == 3 && step > 3) {
      return this.divisor > 0;
    }
    return true;
  }

}
