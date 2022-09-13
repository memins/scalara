import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hypotenuse',
  templateUrl: './hypotenuse.component.html',
  styleUrls: ['./hypotenuse.component.scss']
})
export class HypotenuseComponent implements OnInit {
  Math = window.Math;
  step = 1;
  adjacent = 0;
  opposite = 0;
  constructor() {
  }

  ngOnInit(): void {
  }
  canStepChange(step: number) {
    if (this.step == 2 && step > 2) {
      return this.adjacent > 0;
    } else if (this.step == 3 && step > 3) {
      return this.opposite > 0;
    }
    return true;
  }
  incrementStep() {
    if (!this.canStepChange(this.step + 1)) return;
    this.step++;
  }
  setStep(step: number) {
    if (!this.canStepChange(step)) return;
    this.step = step;
  }

}
