import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-alerts',
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './alerts.html',
  styleUrl: './alerts.scss',
})
export class Alerts {

  constructor(
    public dialogRef: MatDialogRef<Alerts>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  close() {
    this.dialogRef.close();
  }

}
