import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { QnaMakerService, Question } from '../services/qna-maker.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionModalComponent } from '../question-modal/question-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styleUrls: ['./qna-list.component.css']
})
export class QnaListComponent implements OnInit {
  displayedColumns: string[] = ['MainQuestion', 'Answer', 'Questions', 'Actions'];
  dataSource = new MatTableDataSource<any>([]);
  questions: Question[] = [];
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private qnAMakerService: QnaMakerService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() : void{
    this.qnAMakerService.getQuestions().subscribe({
      next: (data: Question[]) => {
        this.questions = data;
        this.dataSource = new MatTableDataSource(this.questions)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Error fetching questions', err);
      }
    });
  }

  loadQuestions(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.qnAMakerService.getQuestions().subscribe({
        next: (data: Question[]) => {
          this.questions = data;
          this.dataSource = new MatTableDataSource(this.questions)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error fetching questions', err);
        }
      });
      this.isLoading = false;
      this.showSuccessMessage('Cambios guardados exitosamente');
    }, 7500); // Simula un retraso de 2 segundos
  }

  openModal(question?: Question): void {
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      width: '600px',
      data: question || { Id: '', MainQuestion: '', Answer: '', Questions: '', Source: ''  }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.Id) {
          this.qnAMakerService.updateQuestion(result).subscribe(() => this.loadQuestions());
        } else {
          this.qnAMakerService.addQuestion(result).subscribe(() => this.loadQuestions());
        }
      }
    });
  }

  openDeleteConfirm(element: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { mainQuestion: element.MainQuestion }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteQuestion(element.Id);
      }
    });
  }

  deleteQuestion(id : string) : void{
      this.qnAMakerService.deleteQuestion(id).subscribe(() => this.loadQuestions());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDetail(element: any): void {
    this.dialog.open(QuestionDetailComponent, {
      width: '600px',
      data: element
    });
  }

  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000, // Duración en milisegundos
      horizontalPosition: 'center', // Posición horizontal
      verticalPosition: 'bottom', // Posición vertical
      panelClass: ['success-snackbar'] // Clase CSS personalizada para estilos
    });
  }
}
