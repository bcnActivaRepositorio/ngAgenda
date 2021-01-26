import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
@Component({
  selector: 'pr-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //to do
  todos: Todo [] = [];
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }

}
