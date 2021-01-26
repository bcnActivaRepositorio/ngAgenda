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

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    console.log('delete me works');
    // ui
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // back
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    //ui
    this.todoService.addTodo(todo).subscribe((todo: Todo) =>{
      this.todos.push(todo);
    })
  }
}
