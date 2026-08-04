import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'applowercase'
})
export class AppLowerCasePipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        return value.toLocaleLowerCase()
    }
}