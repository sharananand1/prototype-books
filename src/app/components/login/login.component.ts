import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApiService} from '../../core/http/api.service';
import {Router} from '@angular/router';
import {SharedServiceService} from '../../core/services/shared-service.service';
import {LocalStorageService} from '../../core/services/local-storage.service';
import {SnotifyService} from 'ng-snotify';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj = {
    email: '',
    password: '',
    disabled: false,
    token: '',
    platform: 1
  };

  constructor(private api: ApiService, private router: Router, private shared: SharedServiceService,
              private auth: LocalStorageService, private snotty: SnotifyService) {
  }

  ngOnInit(): void {
    this.loginObj.token = this.auth.getValue('pushToken', false);
  }

  login(): void {
    /*this.api.login(this.loginObj).subscribe(res => {
      this.auth.setValue(environment.authKey, res.response.token);
      this.auth.setValue('email', res.response.email);
      this.auth.setValue('first_name', res.response.first_name);
      this.auth.setValue('last_name', res.response.last_name);
      this.auth.setValue('phoneNo', res.response.phone_number);
      this.auth.setValue('userID', res.response.id);
      this.shared.userLoggedIn.emit();
      this.router.navigate(['/books']);
    }, (error) => {
      this.snotty.error(error.error.message, 'Error');
    });*/
    this.router.navigate(['/books']);
  }
}
