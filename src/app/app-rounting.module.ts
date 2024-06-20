import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QnaListComponent } from './qna-list/qna-list.component';

const routes: Routes = [
  { path: 'list', component: QnaListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
