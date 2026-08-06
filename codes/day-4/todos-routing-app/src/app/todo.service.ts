import { inject, Injectable } from '@angular/core';
import { ServiceContract } from './service-contract';
import { HttpClient } from '@angular/common/http';
import { TODO_API_URL } from './constants';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements ServiceContract {
  private http = inject(HttpClient)

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TODO_API_URL)
  }
}
