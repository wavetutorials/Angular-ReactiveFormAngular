import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: [
  ]
})
export class TemplateFormComponent implements OnInit {

  // firstName: string;

  constructor() { }
 
  ngOnInit(): void {
  }

  UserRegistration(frmValues: NgForm) {
    if(!frmValues.valid){
      console.log('Form is Invalid');
      return;
    }
    console.log(frmValues)
    console.log('FirstName: ' + frmValues.controls.firstName.value);
    // console.log('FirstName LocalVariable: ' + this.firstName);
    console.log('LastName: ' + frmValues.controls.lastName.value);
    console.log('EmailID: ' + frmValues.controls.emailID.value);

    frmValues.reset();
  }
}
