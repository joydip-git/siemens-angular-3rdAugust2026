import { Observable } from "rxjs";
import { Todo } from "./todo";

export interface ServiceContract {
    getTodos(): Observable<Todo[]>;
}