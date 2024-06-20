import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<QuestionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
