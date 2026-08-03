import { ChangeDetectorRef, Component, signal, WritableSignal } from "@angular/core";
import { Calculator } from "./calculator/calculator";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports:[Calculator]
})
export class App {
  title:WritableSignal<string> = signal('welcome to calculator app')
  width = 400
  

  // updateTitle(e: InputEvent) {
  //   const inputElemnet = e.target as HTMLInputElement
  //   this.title = inputElemnet.value
  // }
  updateTitle(value: string) {
    this.title.set(value)
  }
}