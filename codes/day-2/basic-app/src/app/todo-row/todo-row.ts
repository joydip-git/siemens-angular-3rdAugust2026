import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-row',
  imports: [],
  templateUrl: './todo-row.html',
  styleUrl: './todo-row.css',
})
export class TodoRow {
  @Input() todoinfo?: Todo;
  @Output() todoinfoChange = new EventEmitter<Todo>()
  
  changeTodo(updated: Todo) {
    this.todoinfo = updated
    this.todoinfoChange.emit(this.todoinfo)
  }
}
