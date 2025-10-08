import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomPipePipe } from '../../pipe/custom-pipe-pipe';

@Component({
  selector: 'app-child',
  imports: [JsonPipe, UpperCasePipe,CustomPipePipe],
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
