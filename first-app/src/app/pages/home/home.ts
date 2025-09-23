import { Component } from '@angular/core';
import { FirstCom } from '../../component/first-com/first-com';
import { Accordion } from '../../component/accordion/accordion';
@Component({
  selector: 'app-home',
  imports: [FirstCom, Accordion ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
