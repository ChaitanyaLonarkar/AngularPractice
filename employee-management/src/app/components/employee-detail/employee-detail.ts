import { Component, OnInit } from '@angular/core';
import { Employee } from '../../services/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../../models/employee.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-detail',
  imports: [MatCardModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.scss'
})
export class EmployeeDetail implements OnInit {
  employee?: EmployeeModel;
  constructor(private route: ActivatedRoute, private svc: Employee, private router: Router) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getById(id).subscribe(e => {
      if (!e) this.router.navigate(['/dashboard/employees']);
      this.employee = e;
    });
  }
}