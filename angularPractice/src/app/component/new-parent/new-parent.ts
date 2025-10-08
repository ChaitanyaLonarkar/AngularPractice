import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-parent',
  imports: [],
  templateUrl: './new-parent.html',
  styleUrl: './new-parent.css',
})
export class NewParent {
  data = [
    { id: 1, name: 'chaitanya' },
    { id: 2, name: 'kumar' },
    { id: 3, name: 'reddy' },
  ];
  constructor(private router: Router) {}
  navigateToChild(name: string) {
    {
      this.router.navigate(['parent/newchild', name]);
    }
  }
}
