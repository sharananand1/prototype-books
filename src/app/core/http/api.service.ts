import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  login(data): Observable<any> { // login
    return this.httpClient.post('login', data);
  }

  signUp(data): Observable<any> { // new registration
    return this.httpClient.post('register', data);
  }

  addAccount(data): Observable<any> { // add account details
    return this.httpClient.post('add-account', data);
  }
  getBankTable(city): Observable<any> { // get bank table
    return this.httpClient.get('banks?city=' + city);
  }
}

