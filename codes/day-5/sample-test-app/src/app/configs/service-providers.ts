import { Provider } from "@angular/core";
import { SERVICE_TOKEN } from "./constants";
import { TodoService } from "../services/todo.service";

export const provideTodoService = (): Provider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: TodoService
    }
}