import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { FilterPipePipe } from '../../pipe/filter-pipe-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipestesting',
  imports: [FilterPipePipe,FormsModule],
  templateUrl: './pipestesting.html',
  styleUrl: './pipestesting.css'
})
export class Pipestesting {
  searchText: string = '';
  users = [
    { id: 1, name: 'John Doe', email: 'HdIj0@example.com' },
    { id: 2, name: 'Jane Smith', email: 'rBt0S@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'RiOyV@example.com' },]

}
