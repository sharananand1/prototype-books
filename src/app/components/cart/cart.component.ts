import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../core/services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderItems: any = [];
  constructor(private auth: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.orderItems = this.auth.getValue('order_items', true);
    if (!this.orderItems || this.orderItems.length === 0) {
      this.router.navigate(['/books']);
    }
  }
  removeItemFromCart(i): any {
    this.orderItems.splice(i, 1);
    this.auth.setValue('order_items', this.orderItems);
    if (!this.orderItems || this.orderItems.length === 0) {
      this.router.navigate(['/books']);
    }
  }

}
