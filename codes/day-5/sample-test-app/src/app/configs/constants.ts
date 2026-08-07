import { InjectionToken } from "@angular/core";
import { ServiceContract } from "../services/service-contract";

export const SERVICE_TOKEN = new InjectionToken<ServiceContract>("SERVICE_TOKEN")

export const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos'