import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialog: MatDialog){ }

  openDialog(){
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: 'Hello, World!' }
    });

    dialogRef.afterClosed().subscribe(
      result => console.log('Dialog Result', result)
    );
  }

}
