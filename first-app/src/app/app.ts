import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './component/navbar/navbar';
import { Home } from './pages/home/home';
import { Tepmforms } from './component/tepmforms/tepmforms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Home,Tepmforms],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-app');
}
