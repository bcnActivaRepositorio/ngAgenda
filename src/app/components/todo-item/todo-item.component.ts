import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'pr-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;
  // delete
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // set dinamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo?.completed
    }

    return classes;
  }

  // actions
  onToggle(todo: any){
    console.log('onToggle works');
    // toggle ui
    todo.completed = !todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>{
     console.log(todo);
    });
  }

  onDelete(todo: any){
    console.log('onDelete works');
    this.deleteTodo.emit(todo)
  }

}
