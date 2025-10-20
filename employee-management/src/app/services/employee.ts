import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class Employee {
   private employees: EmployeeModel[] = [
    { id: 1, name: 'Asha Singh', email: 'asha@example.com', age: 29, department: 'Angular', skills: ['TypeScript','RxJS'], },
    { id: 2, name: 'Ravi Kumar', email: 'ravi@example.com', age: 45, department: 'Node', skills: ['Express','MongoDB'], },
  ];

  private employees$ = new BehaviorSubject<EmployeeModel[]>([...this.employees]);
  private idCounter = 3;

  getAll(): Observable<EmployeeModel[]> {
    return this.employees$.asObservable();
  }

  getById(id: number): Observable<EmployeeModel | undefined> {
    const found = this.employees.find(e => e.id === id);
    return of(found);
  }

  add(employee: Omit<EmployeeModel,'id'|'createdAt'>): Observable<EmployeeModel> {
    const newEmp: EmployeeModel = { ...employee, id: this.idCounter++ };
    this.employees.push(newEmp);
    this.employees$.next([...this.employees]);
    return of(newEmp);
  }

  update(id: number, patch: Partial<EmployeeModel>): Observable<EmployeeModel | undefined> {
    const idx = this.employees.findIndex(e => e.id === id);
    if (idx === -1) return of(undefined);
    this.employees[idx] = { ...this.employees[idx], ...patch };
    this.employees$.next([...this.employees]);
    return of(this.employees[idx]);
  }

  delete(id: number): Observable<boolean> {
    const idx = this.employees.findIndex(e => e.id === id);
    if (idx === -1) return of(false);
    this.employees.splice(idx, 1);
    this.employees$.next([...this.employees]);
    return of(true);
  }

  // search helper
  search(term: string) {
    // const t = term.trim().toLowerCase();
    // if (!t) return this.getAll();
    // const filtered = this.employees.filter(e => e.name.toLowerCase().includes(t) || e.department.toLowerCase().includes(t));
    // return of(filtered);
  }
}
