import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-child',
  imports: [],
  templateUrl: './new-child.html',
  styleUrl: './new-child.css'
})
export class NewChild {
  name: any = '';
 constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      console.log(params.get('name'));
      this.name = params.get('name');
    });
 }
}
