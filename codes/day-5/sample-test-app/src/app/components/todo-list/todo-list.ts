import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Todo } from '../../models/todo';
// import { ServiceContract } from '../../services/service-contract';
// import { SERVICE_TOKEN } from '../../configs/constants';
import { Observable, Observer, Subscription } from 'rxjs';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {
  todos = signal<Todo[]>([])
  errorInfo = signal('')
  isRequestOver = signal(false)
  
  //private todoSvc = inject<ServiceContract>(SERVICE_TOKEN)
  private todoSvc = inject(TodoService)
  private fetchSubscription?: Subscription;

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    const obs: Observable<Todo[]> = this.todoSvc.getTodos()
    const todoObserver: Observer<Todo[]> = {
      next: (data) => {
        this.todos.set(data.slice(0, 10))
        this.errorInfo.set('')
        this.isRequestOver.set(true)
      },
      error: (err) => {
        this.todos.set([])
        this.errorInfo.set(err.message)
        this.isRequestOver.set(true)
      },
      complete: () => { }
    }
    this.fetchSubscription = obs.subscribe(todoObserver)
  }
}
