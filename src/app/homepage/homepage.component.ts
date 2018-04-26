import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Users } from './user_model';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']

})
export class HomepageComponent implements OnInit {
  public delarr:Users[];
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
  onUserDelete(item){
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.deleteUser(item.user_id).subscribe(
      (data:any)=>{
        this.dataSource.data.splice( this.dataSource.data.indexOf(item),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }
}
onUserUpdate(item)
{
  alert("hello");
  console.log(item.user_id);
  this.router.navigate(['/updateuser',item.user_id]);
}
  
}
