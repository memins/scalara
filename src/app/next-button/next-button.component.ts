import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent implements OnInit {
  @Input() step: number = 1;
  @Input() end: number = 1;
  constructor() { }

  @Output() reset = new EventEmitter<undefined>();
  @Output() next = new EventEmitter<undefined>();

  ngOnInit(): void {
  }

  emitReset() {
    this.reset.emit();
  }
  emitNext() {
    this.next.emit();
  }

}
