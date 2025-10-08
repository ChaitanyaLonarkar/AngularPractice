import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [JsonPipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() message!: string;
  @Input() data: any;

  @Output() dataToParent = new EventEmitter<string>();
  childMessage: string = 'chaitanya from child';

  sendDataToParent() {
    this.dataToParent.emit(this.childMessage);
  }
}
