import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

export interface Question {
  Id: string,
  MainQuestion: string,
  Answer: string,
  Questions: string[],
  Source: string
}

@Injectable({
  providedIn: 'root'
})
export class QnaMakerService {
  private endpointAdd = environment.webApp.url+"/Add";
  private endpointUpdate = environment.webApp.url+"/replace";
  private endpointGet = environment.webApp.url+"/Questions";
  private endpointDelete = environment.webApp.url+"/delete/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  addQuestion(question: Question): Observable<Question> {
    return this.http.patch<Question>(this.endpointAdd, question);
  }
  updateQuestion(question: Question): Observable<Question> {
    return this.http.patch<Question>(this.endpointUpdate, question);
  }
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.endpointGet);
  }
  deleteQuestion(id : string): Observable<any> {
    return this.http.patch(this.endpointDelete+id,"",this.httpOptions);
  }

}
