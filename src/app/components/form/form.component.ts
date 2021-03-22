import {Component, OnInit} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {LocalStorageService} from '../../core/services/local-storage.service';
declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  minDate;
  tableObj = {
    phoneNumber: '',
    pax: '',
    name: '',
    tableNumber: '',
    tableLocation: '',
    bookDate: '',
    time: '',
    status: 0
  };
  selectedDuration = 'now';
  allBookedTables = [];
  constructor(private auth: LocalStorageService,
              private snotty: SnotifyService) {
  }

  ngOnInit(): void {
    $('html, body').animate(
      { scrollTop: '5' }, 200);
    const today = new Date();
    const day = today.getUTCDate();
    const month = today.getUTCMonth() + 1;
    const year = today.getUTCFullYear();
    console.log(day, month ,  year);
    this.minDate = new Date();
  }

  addReservation(): any {
    for (let i = 0; i < this.allBookedTables.length; i++) {
      if (this.allBookedTables[i].phoneNumber == this.tableObj.phoneNumber) {
        this.snotty.warning('Oops, Your table is already reserved with your Phone Number');
        return false;
      }
    }
    this.allBookedTables.push({
      phoneNumber: this.tableObj.phoneNumber,
      pax: this.tableObj.pax,
      name: this.tableObj.name,
      tableNumber: this.tableObj.tableNumber,
      tableLocation: this.tableObj.tableLocation,
      bookDate: this.tableObj.bookDate,
      time: this.tableObj.time,
      status: 1
    });
    this.snotty.success('Your Table is Reserved Successfully');
    this.auth.setValue('bookedTables', this.allBookedTables);
    this.tableObj.phoneNumber = '';
    this.tableObj.pax = '';
    this.tableObj.name = '';
    this.tableObj.tableNumber = '';
    this.tableObj.tableLocation = '';
    this.tableObj.bookDate = '';
    this.tableObj.time = '';
    this.tableObj.status = 0;
  }
}
