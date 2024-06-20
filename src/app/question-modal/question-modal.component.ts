import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

export interface Question {
  Id: string,
  MainQuestion: string,
  Answer: string,
  Questions: string[],
  Source: string
}

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent {

  questionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<QuestionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private fb: FormBuilder
  ) {
    this.questionForm = this.fb.group({
      Id: "1",
      
      MainQuestion: [data.MainQuestion],
      Answer: [data.Answer],
      Questions: this.fb.array(data.Questions ? data.Questions.map(alt => this.fb.control(alt)) : []),
      Source: [data.Source]
    });
  }

  get Questions(): FormArray {
    return this.questionForm.get('Questions') as FormArray;
  }

  addQuestions(): void {
    this.Questions.push(this.fb.control(''));
  }

  removeQuestions(index: number): void {
    this.Questions.removeAt(index);
  }

  save(): void {
    if (this.questionForm.valid) {

    this.dialogRef.close(this.questionForm.value);
    }
  }
}
