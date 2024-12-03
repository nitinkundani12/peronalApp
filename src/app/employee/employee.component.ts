import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  @Input()
  departments!: any[];
  // employees: any;

  constructor() { }

  ngOnInit(): void {
    // this.employees = this.department.employees;

  }

  addEmployee(dep: any, newEmployee: any) {
    dep.employees[newEmployee.id]=newEmployee.name;
  }

}
