import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  //imports: [ReactiveFormsModule],
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*
  // ctrlEmail = new FormControl('enter email', [Validators.required, Validators.email])
  // ctrlName = new FormControl('enter name', Validators.required)

  form = new FormGroup({
    ctrlEmail: new FormControl('enter email', [Validators.required, Validators.email]),
    ctrlName: new FormControl('enter name', Validators.required)
  })

  get ctrlEmail() {
    return this.form.get('ctrlEmail')
  }

  get ctrlName() {
    return this.form.get('ctrlName')
  }

  submit() {    
    //console.log(this.ctrlEmail?.value, this.ctrlName?.value);
    console.log(this.form.value);
  }
  */

  submit(frm: FormGroup) {
    console.log(frm);
  }
}
