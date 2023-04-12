import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetPopupComponent } from './bottom-sheet-popup.component';

describe('BottomSheetPopupComponent', () => {
  let component: BottomSheetPopupComponent;
  let fixture: ComponentFixture<BottomSheetPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
