import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QnaListComponent } from './qna-list/qna-list.component';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { AppRoutingModule } from './app-rounting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { QnaMakerService } from './services/qna-maker.service';
import { provideHttpClient} from '@angular/common/http'
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    QnaListComponent,
    QuestionModalComponent,
    QuestionDetailComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
    ],
  providers: [provideHttpClient(), QnaMakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
