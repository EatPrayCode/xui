import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContactComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(user: any): void {
    this.dialogRef.close(user);
  }

  ngOnInit(): void { }

}
