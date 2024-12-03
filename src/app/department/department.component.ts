import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  data: any;
  selectedDep: any;
  employees: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe(data => {
      this.data = data;
      console.log(this.data); 
    });
  }

  handleClick() {
    this.selectedDep = this.data.filter((dep: { isSelected: boolean; }) => dep.isSelected);
    console.log("Selected Dep.");
    console.log(this.selectedDep);
    /* this.employees = this.selectedDep.employees;
    console.log("Employees");
    console.log(this.employees); */
  }

  addDepartment(newObject: any) {

    this.data.push(newObject);
}

}



