import { Component, Inject } from '@angular/core';

import {MatButtonModule} from '@angular/material/button'
import{MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  standalone : true,
  imports: [MatButtonModule, MatDialogContent, MatDialogModule, MatDialogTitle],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.scss',
})
export class ErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string){}

}
