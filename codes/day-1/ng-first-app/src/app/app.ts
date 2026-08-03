import { ChangeDetectorRef, Component, signal, WritableSignal } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:WritableSignal<string> = signal('welcome to angular')
  width = 400
  

  // updateTitle(e: InputEvent) {
  //   const inputElemnet = e.target as HTMLInputElement
  //   this.title = inputElemnet.value
  // }
  updateTitle(value: string) {
    this.title.set(value)
  }
}