import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() step=1;
  @Input() steps:Array<string> = [];
  @Input() title = '';
  @Output() changeStepEvent = new EventEmitter<number>();
  constructor() { }

  changeStep(step: number) {
    console.log("changeStep", step);
    this.changeStepEvent.emit(step);
  }

  ngOnInit(): void {
  }


}
