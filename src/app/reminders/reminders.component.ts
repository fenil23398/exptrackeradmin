import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ReminderDbService } from './reminder-db.service';
import { Reminder } from './reminder-model';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
reminder:Reminder[];
public delarr:Reminder[]=[];
i:number=0;
public mails:string='';
dataSource: MatTableDataSource<Reminder>;
displayedColumns = [' ', 'fk_user_email', 'rem_date', 'rem_title','rem_desc', 'Action'];
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
  constructor(public _data:ReminderDbService,
  public router:Router) { }

  ngOnInit() {
    this.mails=localStorage.getItem('name'); 
    if(this.mails=='')
    {
      this.router.navigate(['/login']);    
    }
    this._data.getallReminders().subscribe(
      (data: any) => {
        this.reminder = data;
        this.dataSource = new MatTableDataSource<Reminder>(this.reminder);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )

  }
  onRemDelete(element)
  {
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.deleteReminder(element.rem_id).subscribe(
      (data:any)=>{
    
        this.dataSource.data.splice(this.dataSource.data.indexOf(element),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }

}


checkChange(item:Reminder)
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
  
  if(confirm("Are You Sure want to delete?"))
  {
  
    for(this.i=0;this.i<this.delarr.length;this.i++)
   {
    
     this._data.deleteReminder(this.delarr[this.i].rem_id).subscribe(
    (data:any)=>{
  
      this.dataSource.data.splice( this.dataSource.data.indexOf(this.delarr[this.i]),1);
      this.dataSource.paginator=this.paginator;
     
    }
   
  );

    }
    this.dataSource.paginator=this.paginator;
    
    this.delarr=[];
   // window.location.reload();
    this.router.navigate(["/reminders"]);
}
}


}