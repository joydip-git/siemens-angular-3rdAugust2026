import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { TodoService } from "./todo.service";
import { Subscription } from "rxjs";
import { Todo } from "../models/todo";
import { TODO_API_URL } from "../configs/constants";

describe(
    "Testing TodoService Methods",
    () => {

        let httpClientMock: HttpTestingController;
        let todoSvc: TodoService;
        let todoSub: Subscription;
        

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
            () => {
                TestBed.configureTestingModule({
                    providers: [
                        provideHttpClientTesting()
                    ]
                })

                httpClientMock = TestBed.inject(HttpTestingController)
                todoSvc = TestBed.inject(TodoService)
            }
        )

        afterEach(
            () => {
                httpClientMock.verify()
                todoSub?.unsubscribe()
            }
        )

        it("todoservice created",
            () => {
                expect(todoSvc).toBeTruthy()
            }
        )

        it("todoservice getTodos method returns expected todos",
            () => {
                todoSub = todoSvc.getTodos().subscribe({
                    next: (data) => {
                        expect(data.length).toBe(3)
                        expect(data).toEqual(mockTodos)
                    }
                })

                const req: TestRequest = httpClientMock.expectOne(TODO_API_URL)
                expect(req.request.method).toBe('GET')

                req.flush(mockTodos)
            }
        )

    }
)