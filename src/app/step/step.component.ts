import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() step: number | undefined;
  @Input() display: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
