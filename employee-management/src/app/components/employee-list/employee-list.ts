import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '../../services/employee';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeModel } from '../../models/employee.model';
import { MatChipsModule } from '@angular/material/chips';
import { NgStyle } from '@angular/common';



@Component({
  selector: 'app-employee-list',
  imports: [MatInputModule,MatFormFieldModule,MatCardModule,MatIcon,MatChipsModule,MatTableModule,NgStyle],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeList implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['name','email','department','age','actions'];
  dataSource = new MatTableDataSource<EmployeeModel>([]);
  subs = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private svc: Employee, private dialog: MatDialog, private snack: MatSnackBar) {}

  ngOnInit() {
    console.log('ngOnInit -> loading employee list');
    this.subs.add(this.svc.getAll().subscribe(list => {
      this.dataSource.data = list;
      console.log('list updated', list);
    }));
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit -> table views ready');
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(ev: Event) {
    const target = ev.target as HTMLInputElement;
    this.dataSource.filter = target.value.trim().toLowerCase();
  }

  colorFor(dept: string) {
    switch(dept) {
      case 'Angular': return 'blue';
      case 'React': return 'green';
      case 'Node': return 'orange';
      default: return '';
    }
  }

  view(id: number) { /* navigate to detail */ }
  edit(id: number) { /* navigate to edit route */ }

  // delete(emp: Employee) {
  //   const d = this.dialog.open(DeleteConfirmDialogComponent, { data: emp });
  //   d.afterClosed().subscribe(res => {
  //     if (res === true) {
  //       this.svc.delete(emp.id).subscribe(ok => {
  //         if (ok) this.snack.open('Deleted', 'Close', { duration: 2000 });
  //       });
  //     }
  //   });
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy -> cleaning up');
    this.subs.unsubscribe();
  }
}