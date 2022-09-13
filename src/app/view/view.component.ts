import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  Math = window.Math;
  step = 1;
  
  constructor() {
  }

  ngOnInit(): void {
  }
  canStepChange(step: number) {
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
  reset(){}
 

}
