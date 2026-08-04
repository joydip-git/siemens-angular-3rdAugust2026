import { Component, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';
import { Todo } from '../models/todo';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { AppLowerCasePipe } from '../pipes/app-lowercase.pipe';

@Component({
  selector: 'app-todo-detail',
  imports: [UpperCasePipe, CurrencyPipe, AppLowerCasePipe],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail {
  @Input('todoData') todoinfo?: Todo;
  @Output('todoDataChange') todoinfoChange = new EventEmitter<Todo>()

  // todoinfo: InputSignal<Todo | undefined> = input<Todo | undefined>(undefined, { alias: 'todoData' })
  // todoinfoChange: OutputEmitterRef<Todo> = output<Todo>({ alias: 'todoDataChange' })

  changeTodo(updated: Todo) {
    this.todoinfo = updated
    this.todoinfoChange.emit(this.todoinfo)
  }
}
