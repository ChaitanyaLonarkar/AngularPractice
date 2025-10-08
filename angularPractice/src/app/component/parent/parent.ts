import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentMessage: string = 'Hello from parent!';
  parentData = { name: 'Chaitanya', age: 22 };


  receivedData: string = '';

      receiveDataFromChild(data: string) {
        this.receivedData = data;
      }
}
