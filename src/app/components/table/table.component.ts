import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/http/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  allBanks = [];
  filterObj = {
    city: 'DELHI',
    address: '',
    branch: ''
  };
  searchPage = 1;
  totalPage;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.filterObj.city = params.get('city');
    });
  }

  ngOnInit(): void {
    this.getTable();
  }

  getTable(): void {
    this.api.getBankTable(this.filterObj.city).subscribe(res => {
      console.log(res);
      this.allBanks = res;
      this.totalPage = res.length;
    }, error => {
      console.log(error);
    });
  }

  pageChangedUnderWay($event): void {
    this.searchPage = $event;
    this.getTable();
  }
}
