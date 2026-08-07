import { ComponentFixture, TestBed } from "@angular/core/testing"
import { App } from "./app";
import { By } from "@angular/platform-browser";
describe(
  "app component testing",
  () => {

    let appFixture: ComponentFixture<App>;
    beforeEach(
      () => {
        appFixture = TestBed.createComponent(App)
      }
    )

    it("title property of App component has initial value -> sample-test-app",
      () => {
        const app: App = appFixture.componentInstance;
        expect(app.title).toBe('sample-test-app')
      }
    )


    it("h2 is App template displaying -> sample-test-app",
      async () => {
        const app: App = appFixture.componentInstance;
        const appTemplate = appFixture.debugElement.nativeElement
        await appFixture.whenStable()
        
        const h2Element: HTMLElement = appTemplate.querySelector('h2')
        expect(h2Element.textContent).toBe(app.title)
      }
    )

  }
)