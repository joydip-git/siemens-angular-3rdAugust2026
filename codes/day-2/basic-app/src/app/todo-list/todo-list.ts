import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { todos } from '../data/todos';
import { TodoRow } from '../todo-row/todo-row';

@Component({
  selector: 'app-todo-list',
  imports: [TodoRow],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  todorecords: Todo[];
  constructor() {
    this.todorecords = todos
  }
  updateTodo(newData: Todo) {
    const index = this
      .todorecords
      .findIndex(
        (t) => t.id === newData.id
      )
    if (index >= 0) {
      this.todorecords.splice(index, 1, newData)
    }
  }
}
