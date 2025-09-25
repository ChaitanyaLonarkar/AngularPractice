import { Component } from '@angular/core';
import { FirstCom } from '../../component/first-com/first-com';
import { Accordion } from '../../component/accordion/accordion';
import { Forms } from '../../component/forms/forms';
@Component({
  selector: 'app-home',
  imports: [Forms ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
