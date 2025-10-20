// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormArray } from '@angular/forms';
// import { Employee } from '../../services/employee';
// import {  MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatOptionModule } from '@angular/material/core';
// import { MatSelectModule } from '@angular/material/select';

// @Component({
//   selector: 'app-employee-form',
//   imports: [
//     // MatError,
//     MatFormFieldModule,
//     MatCardModule,
//     MatButtonModule,
//     MatInputModule,
//     MatIconModule,
//     ReactiveFormsModule,
//     MatOptionModule,
//     MatSelectModule
//   ],
//   templateUrl: './employee-form.html',
//   styleUrl: './employee-form.scss',
// })
// export class EmployeeForm implements OnInit {
//   empId?: number;
//   form: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private svc: Employee,
//     private snack: MatSnackBar
//   ) {
//     this.form = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       age: ['', [Validators.required, Validators.min(19)]], // >18
//       department: ['', Validators.required],
//       skills: this.fb.array([]) ,
//     });
//   }

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.empId = +id;
//       this.svc.getById(this.empId).subscribe((emp) => {
//         if (!emp) this.router.navigate(['/dashboard/employees']);
//         this.form.patchValue({
//           name: emp?.name,
//           email: emp?.email,
//           age: emp?.age,
//           department: emp?.department,
//         });
//         // emp?.skills.forEach(s => this.skills.push(this.fb.control(s)));
//       });
//     } else {
//       // initialize one skill field
//       this.addSkill();
//     }
//   }

//   get skills() {
//     return this.form.get('skills') as FormArray;
//   }

//   addSkill(value = '') {
//     this.skills.push(this.fb.control(value, Validators.required));
//   }
//   removeSkill(i: number) {
//     this.skills.removeAt(i);
//   }

//   reset() {
//     this.form.reset();
//     this.skills.clear();
//     this.addSkill();
//   }

//   save() {
//     if (this.form.invalid) return;
//     const payload = { ...this.form.value };
//     if (this.empId) {
//       this.svc.update(this.empId, payload).subscribe(() => {
//         this.snack.open('Employee updated', 'Close', { duration: 2000 });
//         this.router.navigate(['/dashboard/employees']);
//       });
//     } else {
//       this.svc.add(payload).subscribe(() => {
//         this.snack.open('Employee added', 'Close', { duration: 2000 });
//         this.router.navigate(['/dashboard/employees']);
//       });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../services/employee';
import {  MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm implements OnInit {
  empId?: number;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: Employee,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(19)]],
      department: ['', Validators.required],
      skills: this.fb.array([this.fb.control('', Validators.required)]), // ✅ Start with one skill field
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.empId = +id;
      this.svc.getById(this.empId).subscribe((emp) => {
        if (!emp) this.router.navigate(['/dashboard/employees']);
        this.form.patchValue({
          name: emp!.name,
          email: emp!.email,
          age: emp!.age,
          department: emp!.department,
        });
        // ✅ Populate skills properly
        this.skills.clear();
        emp!.skills?.forEach((s: string) => this.addSkill(s));
      });
    }
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  addSkill(value = ''): void {
    this.skills.push(this.fb.control(value, Validators.required));
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  reset(): void {
    this.form.reset();
    this.skills.clear();
    this.addSkill();
  }

  save(): void {
    if (this.form.invalid) return;

    const payload = { ...this.form.value };
    console.log('Payload:', payload);

    if (this.empId) {
      this.svc.update(this.empId, payload).subscribe(() => {
        this.snack.open('Employee updated', 'Close', { duration: 2000 });
        this.router.navigate(['/dashboard/employees']);
      });
    } else {
      this.svc.add(payload).subscribe(() => {
        this.snack.open('Employee added', 'Close', { duration: 2000 });
        this.router.navigate(['/dashboard/employees']);
      });
    }
  }
}
