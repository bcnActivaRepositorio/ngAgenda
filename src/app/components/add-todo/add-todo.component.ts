import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pr-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string = '';
  subtitle: string = 'something to add?'
  id: number = 0;
  // clear filed
  addTask: string = '';
  // output event
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo = {
      id: this.id,
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
    this.clearMe();
  }
  // enter key
  enterPress(e: any): void{
    (e.keyCode === 13) ? console.log('key press has worked') : console.log('key press  not worked');

  }
  // clear Field
  clearMe(): void{
    this.title = '';
    console.log('cleaning fields');
  }
}
// clear fields
// https://reactgo.com/angular-clear-input-field/

