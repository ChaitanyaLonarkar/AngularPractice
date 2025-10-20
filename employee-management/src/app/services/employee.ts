import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class Employee {
  private storageKey = 'employees_data';

  private employees: EmployeeModel[] = [];
  private employees$ = new BehaviorSubject<EmployeeModel[]>([]);
  private idCounter = 3;

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.employees = JSON.parse(saved);
      // ensure idCounter stays higher than the max id
      this.idCounter =
        this.employees.length > 0
          ? this.employees.reduce((maxId, emp) => Math.max(maxId, emp.id || 0), 0) + 1
          : 1;
    } else {
      // default employees if no data in storage
      this.employees = [
        {
          id: 1,
          name: 'Asha Singh',
          email: 'asha@example.com',
          age: 29,
          department: 'Angular',
          skills: ['TypeScript', 'RxJS']
        },
        {
          id: 2,
          name: 'Ravi Kumar',
          email: 'ravi@example.com',
          age: 45,
          department: 'Node',
          skills: ['Express', 'MongoDB']
        }
      ];
      this.saveToLocalStorage();
    }

    this.employees$.next([...this.employees]);
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.employees));
  }

  getAll(): Observable<EmployeeModel[]> {
    return this.employees$.asObservable();
  }

  getById(id: number): Observable<EmployeeModel | undefined> {
    const found = this.employees.find(e => e.id === id);
    return of(found);
  }

  add(employee: Omit<EmployeeModel, 'id' | 'createdAt'>): Observable<EmployeeModel> {
    const newEmp: EmployeeModel = { ...employee, id: this.idCounter++ };
    this.employees.push(newEmp);
    this.employees$.next([...this.employees]);
    this.saveToLocalStorage(); // ✅ persist to localStorage
    return of(newEmp);
  }

  update(id: number, patch: Partial<EmployeeModel>): Observable<EmployeeModel | undefined> {
    const idx = this.employees.findIndex(e => e.id === id);
    if (idx === -1) return of(undefined);
    this.employees[idx] = { ...this.employees[idx], ...patch };
    this.employees$.next([...this.employees]);
    this.saveToLocalStorage(); // ✅ persist changes
    return of(this.employees[idx]);
  }

  delete(id: number): Observable<boolean> {
    const idx = this.employees.findIndex(e => e.id === id);
    if (idx === -1) return of(false);
    this.employees.splice(idx, 1);
    this.employees$.next([...this.employees]);
    this.saveToLocalStorage(); // ✅ persist after delete
    return of(true);
  }

  search(term: string) {
    // optional search helper logic (if needed)
  }
}
