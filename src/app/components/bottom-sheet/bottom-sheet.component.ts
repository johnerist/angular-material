import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetPopupComponent } from './components/bottom-sheet-popup/bottom-sheet-popup.component';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openFile(): void{
    this.bottomSheet.open(BottomSheetPopupComponent);
  }
}
