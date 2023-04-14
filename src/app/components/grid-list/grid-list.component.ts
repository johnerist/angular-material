import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent {
   tiles = [
    { text: '1', cols: 3, rows:1, color: 'lightblue' },
    { text: '2', cols: 1, rows:2, color: 'lightgreen' },
    { text: '3', cols: 1, rows:1, color: 'lightpink' },
    { text: '4', cols: 2, rows:1, color: 'lightred' }
   ]
}
