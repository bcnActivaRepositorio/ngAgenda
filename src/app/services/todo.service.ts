import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor( private http:HttpClient) { }

  getTodos(): Observable<Todo []>{

   return this.http.get<Todo []>(`${this.todosUrl}${this.todosLimit}`);
  }
// dlete Todo
deleteTodo(todo: Todo):Observable<Todo>{
  const url = `${this.todosUrl}/${todo.id}`;
  return this.http.delete<Todo>(url, httpOptions);
}

// add Todo
addTodo(todo:Todo): Observable<Todo>{
  //psot
  return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
}
  // tooggle completed
  toggleCompleted(todo: Todo): Observable<any>{
    // return
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
