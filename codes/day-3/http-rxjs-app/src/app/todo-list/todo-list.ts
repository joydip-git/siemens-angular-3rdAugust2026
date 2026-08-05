import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Todo } from '../todo';
import { ServiceContract } from '../service-contract';
import { SERVICE_TOKEN } from '../constants';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {
  todos = signal<Todo[]>([])
  errorInfo = signal('')
  private todoSvc = inject<ServiceContract>(SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    const obs: Observable<Todo[]> = this.todoSvc.getTodos()
    const todoObserver: Observer<Todo[]> = {
      next: (data) => {
        this.todos.set(data)
        this.errorInfo.set('')
      },
      error: (err) => {
        this.todos.set([])
        this.errorInfo.set(err.message)
      },
      complete: () => { }
    }
    this.fetchSubscription = obs.subscribe(todoObserver)
  }
}
