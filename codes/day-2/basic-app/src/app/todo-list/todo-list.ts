import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { todos } from '../data/todos';
import { TodoDetail } from '../todo-detail/todo-detail';

@Component({
  selector: 'app-todo-list',
  imports: [TodoDetail],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  todorecords: Todo[];
  selectedTodo?: Todo;

  // changeSelectedTodo(e: Event) {
  //   //console.log(selectedId);
  //   //this.selectedTodo = selected   
  //   //this.selectedTodo = this.todorecords.find(t => t.id === selectedId)

  //   const ddl = e.target as HTMLSelectElement
  //   const selectedOption = ddl.options[ddl.selectedIndex]
  //   const selectedId = Number(selectedOption.value)
  //   console.log(selectedId);
  //   this.selectedTodo = this.todorecords.find(t => t.id === selectedId)
  // }
  
  changeSelectedTodo(selectedId:number) {
    console.log(selectedId);
    this.selectedTodo = this.todorecords.find(t => t.id === selectedId)
  }

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
