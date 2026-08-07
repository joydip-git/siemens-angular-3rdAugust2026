import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList } from './todo-list';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { of } from 'rxjs';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;
  let todoMockSvc: jasmine.SpyObj<TodoService>;
  let todoSvc: TodoService;
  const mockTodos: Todo[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
  ]

  beforeEach(
    async () => {

      todoMockSvc = jasmine.createSpyObj("TodoService", ["getTodos"])

      await TestBed.configureTestingModule({
        providers: [
          {
            provide: TodoService,
            useValue: todoMockSvc
          }
        ]
      }).compileComponents()

      todoSvc = TestBed.inject(TodoService)
      fixture = TestBed.createComponent(TodoList)

      //await fixture.whenStable()
    }
  )

  it("component created",
    () => {
      expect(fixture.componentInstance).toBeTruthy()
    }
  )

  it("component todos property has 3 records",
    () => {
      todoMockSvc.getTodos.and.returnValue(of(mockTodos))
      component = fixture.componentInstance;
      component.ngOnInit()
      expect(component.todos().length).toBe(3)
      expect(component.todos()).toEqual(mockTodos)
    }
  )

  it("component tbody element displays 3 tr elements",
    () => {
      todoMockSvc.getTodos.and.returnValue(of(mockTodos))
      component = fixture.componentInstance;
      component.ngOnInit()
      fixture.detectChanges()
      const table: HTMLTableElement = fixture.debugElement.nativeElement.querySelector('table')
      expect(table.tBodies[0].rows.length).toBe(component.todos().length)
    }
  )
});
