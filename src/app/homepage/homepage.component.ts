import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Users } from './user_model';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']

})
export class HomepageComponent implements OnInit {
  user: Users[] = [];
  dataSource: MatTableDataSource<Users>;
  displayedColumns = [' ', 'user_email', 'user_name', 'user_mob_no', 'Action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(public _data: UserServiceService,
    public router: Router) {

  }

  ngOnInit() {
 
    this._data.getAllUsers().subscribe(
      (data: any) => {
        this.user = data;
        this.dataSource = new MatTableDataSource<Users>(this.user);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

}
