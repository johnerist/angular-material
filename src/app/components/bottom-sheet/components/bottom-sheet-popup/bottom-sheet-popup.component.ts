import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-popup',
  templateUrl: './bottom-sheet-popup.component.html',
  styleUrls: ['./bottom-sheet-popup.component.css']
})
export class BottomSheetPopupComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetPopupComponent>
  ){}

  selectAction(event: MouseEvent): void{
    this.bottomSheetRef.dismiss();
  }
}
