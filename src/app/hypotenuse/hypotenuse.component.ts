import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hypotenuse',
  templateUrl: './hypotenuse.component.html',
  styleUrls: ['./hypotenuse.component.scss']
})
export class HypotenuseComponent implements OnInit {

  step = 1;
  constructor() {
  }

  ngOnInit(): void {
  }
  incrementStep() {
    this.step++;
  }

}
