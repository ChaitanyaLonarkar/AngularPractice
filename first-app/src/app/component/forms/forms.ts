import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
//  form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       fullName: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   onSubmit() {
//     if (this.form.invalid) {
//       this.form.markAllAsTouched();
//       return;
//     }
//     console.log('Form submitted:', this.form.value);
//   }

//   onReset() {
//    console.log('Form reset');
//    alert('Form reset');
//   }

name=new FormControl("cha");
password=new FormControl("123456");

displayValue(){
  console.log(this.name.value);
  console.log(this.password.value);
  // alert(this.name.value);
  // alert(this.password.value);
}
}
