import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() showModal: boolean = false;

  @Output() closeModal = new EventEmitter<any>();



        onSubmit(formData: any) {

            // Create object from form data

            const newObject = { 

                "name": formData.depName,
                "head": formData.head,
                "employees" : {},
                "isSelected": false

            };



            // Emit the new object to parent component

            this.closeModal.emit(newObject);

        }


}
