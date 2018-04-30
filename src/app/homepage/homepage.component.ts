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
  public mails:string='';
  user: Users[] = [];
  i:number=0;
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
    this.mails=localStorage.getItem('name'); 
    if(this.mails=='')
    {
      this.router.navigate(['/login']);    
    }
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
    this._data.deleteUsers(item.user_email).subscribe(
      (data:any)=>{
    
        this.dataSource.data.splice( this.dataSource.data.indexOf(item),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }
}


checkChange(item:Users)
{
 
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else
    {
      this.delarr.push(item);
    }
    console.log(this.delarr);
  
}

deleteAll()
{
  
  if(confirm('Are You Sure want to delete?'))
  {
  
    for(this.i=0;this.i<this.delarr.length;this.i++)
   {
    
     this._data.deleteUsers(this.delarr[this.i].user_email).subscribe(
    (data:any)=>{
  
      this.dataSource.data.splice( this.dataSource.data.indexOf(this.delarr[this.i]),1);
      this.dataSource.paginator=this.paginator;
     
    }
   
  );

    }
    this.dataSource.paginator=this.paginator;
    
    this.delarr=[];
   // window.location.reload();
    this.router.navigate(['/home']);
}
}
onUserUpdate(item:Users)
{
  this.router.navigate(['/updateuser',item.user_email]);
}
}
