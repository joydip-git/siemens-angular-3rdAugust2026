export interface ServiceContract {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

export class CalculationService implements ServiceContract {
    constructor() {
        console.log('created');
    }
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
    multiply(a: number, b: number): number {
        return a * b
    }
    divide(a: number, b: number): number {
        return a / b
    }
}