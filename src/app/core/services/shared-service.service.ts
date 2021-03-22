import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SharedServiceService {
  userLoggedIn = new EventEmitter<any>();
  userLoggedOut = new EventEmitter<any>();
  addItemToCart = new EventEmitter<any>();
  headerTitle = new EventEmitter<any>();

  constructor() {
  }
}
