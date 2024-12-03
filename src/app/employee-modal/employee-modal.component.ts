import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() closeModal = new EventEmitter<any>();

        onSubmit(formData: any) {

            // Create object from form data

            // Emit the new object to parent component

            const newEmployee = {
              "id": formData.id,
              "name": formData.name
            }

            this.closeModal.emit(newEmployee);

        }

}
