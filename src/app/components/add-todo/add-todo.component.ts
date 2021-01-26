import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pr-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string = '';
  subtitle: string = 'something to add?'
  // output event
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}
