import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import {  Todo } from '../../models/todo';
@Component({
  selector: 'pr-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
 //to do
 todos: Todo [] = [];
 selectedTodo?: Todo;
 myArr: any[] = [];
 lastId: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo): void{
    console.log('delete me works');
    // now deletes only the selected fake api one 
   this.todos = this.todos.filter((t) => t.id !== todo.id);
    // back
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo): void{
    //ui
    this.todoService.addTodo(todo).subscribe((todo: Todo) =>{
      // fake api
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    });
  }
  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    console.log(this.selectedTodo);
    this.todoService.updateTodo(todo);
  }

}
