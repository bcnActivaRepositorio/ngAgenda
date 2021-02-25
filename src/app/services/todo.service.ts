import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosUrl: string = "https://my-json-server.typicode.com/bcnactivarepositorio/ngAgenda/todos";
  todosLimit: string = '?_limit=4';
  lastId: number = 0;
  todos: Todo [] = [];
  public items: any = []; // doesn't work as we are working with http responses

  constructor(private http:HttpClient) { }
// get all dat
   getTodos(): Observable<Todo []>{

   return this.http.get<Todo []>(`${this.todosUrl}${this.todosLimit}`)
   .pipe(
     catchError(this.handleList<Todo[]>('getTodos', []))
   );
  }
  // handle errors
  private handleList<Todo>(operation = 'operation', result?: Todo){
    return (error: any): Observable<Todo> => {
      // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    let cont: any = (`${operation} failed: ${error.message}`)

    // Let the app keep running by returning an empty result.
    return cont;
    }
  }
  // update not yet
  updateTodo = async (todo: Todo) => {
    try {
      console.log('try and catch');
      const url = `${this.todosUrl}/${todo.id}`;
      this.http.put<Todo>(url, httpOptions);
    } catch (error) {
      console.log(error);
    }
  }
// dlete Todo
deleteTodo(todo: Todo): Observable<Todo>{

  const url = `${this.todosUrl}/${todo.id}`;
  return this.http.delete<Todo>(url, httpOptions);
}
deleteTodoById(id: number): Observable<Todo>{
  this.todos = this.todos?.filter(todo => todo.id !== id);
  const url = `${this.todosUrl}/:${id}`;
  return this.http.delete<Todo>(url, httpOptions);
}

// add Todo
addTodo(todo:Todo): Observable<Todo>{
 // container
 let myContainer: any;
  console.log(JSON.stringify(todo));
  // don't print empty filed
  (todo.title == "") ? myContainer = null
                     : myContainer = this.http.post<Todo>(`${this.todosUrl}`, todo, httpOptions);
  return myContainer;
}
  // tooggle completed // method put => update
  toggleCompleted(todo: Todo): Observable<any>{
    // return
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

}
