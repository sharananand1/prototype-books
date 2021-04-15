import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../core/http/api.service';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {
  accountObj = {
    first_name: '',
    last_name: '',
    gender: 'male',
    phone_number: '',
    email: '',
    account_no: '',
    ifsc_code: '',
    notes: ''
  };
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  addDetails(): void {
    console.log(this.accountObj);
    this.api.addAccount(this.accountObj).subscribe(res => {
      console.log(this.accountObj);
    }, error => {
      console.log(error);
    });

  }
}
