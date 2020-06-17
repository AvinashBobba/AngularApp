import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  errormessage: string = '';
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  submit() {}
}
