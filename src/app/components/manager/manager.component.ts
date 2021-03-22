import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../core/services/local-storage.service';
declare var $: any;
@Component({
  selector: 'app-congrats',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  allBookedTables: any = [];
  getPax = '';
  getDate = '';
  filteredBookTable = [];
  bookedDate = [];
  XPosition = 0;
  YPosition = 0;
  heightTextArea;
  widthTextArea;
  constructor(private auth: LocalStorageService) {
  }

  ngOnInit(): any {
    // this.getHeight();
    // this.getBookings('', '');
    // this.checkWidth();

  }
  getHeight(): any {
      const textarea = $('#history');
      this.heightTextArea = textarea.height();
      this.widthTextArea = textarea.width();
  }

 /* getBookings(pax, date): void {
    this.allBookedTables = [];
    this.allBookedTables = this.auth.getValue('bookedTables', true);
    this.filteredBookTable = [];
    if (pax && date == '') {
      for (let i = 0; i < this.allBookedTables.length; i++) {
        if (pax && this.allBookedTables[i].pax == pax) {
          this.filteredBookTable.push(this.allBookedTables[i]);
        }
      }
    } else if (pax == '' && date) {
      const selectedDate = date;
      const selectedDay = selectedDate.getUTCDate() + 1;
      const selectedMonth = selectedDate.getUTCMonth() + 1;
      const selectedYear = selectedDate.getUTCFullYear();
      this.bookedDate = [];
      for (let i = 0; i < this.allBookedTables.length; i++) {
        this.bookedDate.push(new Date(this.allBookedTables[i].bookDate));
      }
      for (let i = 0; i < this.bookedDate.length; i++) {
        const bookDay = this.bookedDate[i].getUTCDate() + 1;
        const bookMonth = this.bookedDate[i].getUTCMonth() + 1;
        const bookYear = this.bookedDate[i].getUTCFullYear();
        if (date && (bookDay + '' + bookMonth + '' + bookYear == selectedDay + '' + selectedMonth + selectedYear)) {
          this.filteredBookTable.push(this.allBookedTables[i]);
        }
      }
    } else if (pax && date) {
      this.filteredBookTable = [];
      const selectedDate = date;
      const selectedDay = selectedDate.getUTCDate() + 1;
      const selectedMonth = selectedDate.getUTCMonth() + 1;
      const selectedYear = selectedDate.getUTCFullYear();
      this.bookedDate = [];
      for (let i = 0; i < this.allBookedTables.length; i++) {
        this.bookedDate.push(new Date(this.allBookedTables[i].bookDate));
      }
      for (let i = 0; i < this.bookedDate.length; i++) {
        const bookDay = this.bookedDate[i].getUTCDate() + 1;
        const bookMonth = this.bookedDate[i].getUTCMonth() + 1;
        const bookYear = this.bookedDate[i].getUTCFullYear();
        if (date && (bookDay + '' + bookMonth + '' + bookYear == selectedDay + '' + selectedMonth + selectedYear)) {
          for (let j = 0; j < this.allBookedTables.length; j++) {
              if (pax && this.allBookedTables[j].pax == pax) {
                this.filteredBookTable.push(this.allBookedTables[j]);
              }
            }
        }
      }
    }
    else if (pax == '' && date == '') {
      this.filteredBookTable = [];
      this.getPax = '';
      this.getDate = '';
      for (let i = 0; i < this.allBookedTables.length; i++) {
        this.filteredBookTable.push(this.allBookedTables[i]);
      }
    }
  }*/

  cancelBooking(i): void {
    this.allBookedTables[i].status = 0;
    console.log(this.allBookedTables);
    this.auth.setValue('bookedTables', this.allBookedTables);
    // this.getBookings('', '');
  }

  reset(): void {
    this.filteredBookTable = [];
    for (let i = 0; i < this.allBookedTables.length; i++) {
      this.filteredBookTable.push(this.allBookedTables[i]);
    }
  }
  onDragEnded(event): any {
    const element = event.source.getRootElement();
    const boundingClientRect = element.getBoundingClientRect();
    const parentPosition = this.getPosition(element);
    // console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
    this.XPosition = boundingClientRect.x - parentPosition.left;
    this.YPosition = boundingClientRect.y - parentPosition.top;
  }

  getPosition(el): any {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }
  /*checkWidth(): any {
    const fontSize = 12;
    const widthTest = document.getElementById('widthTest');
    widthTest.style.fontSize = fontSize;
    const height = (widthTest.clientHeight + 1) + 'px';
    const width = (widthTest.clientWidth + 1) + 'px';

    console.log(height, width);
  }*/


}
