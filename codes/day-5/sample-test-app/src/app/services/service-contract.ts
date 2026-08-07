import { Observable } from "rxjs";
import { Todo } from "../models/todo";

export interface ServiceContract {
    getTodos(): Observable<Todo[]>;
}