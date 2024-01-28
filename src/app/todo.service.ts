import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/api/v1/todo";


  getTodoList(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`)
  }
}
