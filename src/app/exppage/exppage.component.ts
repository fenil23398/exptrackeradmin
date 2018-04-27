import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { ExpDbService } from './exp-db.service';
import { Spends } from './exp-model';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-exppage',
  templateUrl: './exppage.component.html',
  styleUrls: ['./exppage.component.css']
})
export class ExppageComponent implements OnInit {
spends:Spends[];
i:number;
dataSource: MatTableDataSource<Spends>;
public delarr:Spends[]=[];
displayedColumns = [' ', 'fk_user_email', 'expense_date', 'expense_amt','sub_cat_name','Action'];
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

  constructor(public _data:ExpDbService,
  public router:Router) { }

  ngOnInit() {

    this._data.getALlSpends().subscribe(
      (data: any) => {
        this.spends = data;
        this.dataSource = new MatTableDataSource<Spends>(this.spends);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }


  onExpDelete(item){
    if(confirm("Are You Sure want to delete?"))

    {
    this._data.deleteSpends(item.expense_id).subscribe(
      (data:any)=>{
    
        this.dataSource.data.splice( this.dataSource.data.indexOf(item),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }
}

checkChange(item:Spends)
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
    
     this._data.deleteSpends(this.delarr[this.i].expense_id).subscribe(
    (data:any)=>{
  
      this.dataSource.data.splice( this.dataSource.data.indexOf(this.delarr[this.i]),1);
      this.dataSource.paginator=this.paginator;
     
    }
   
  );

    }
    this.dataSource.paginator=this.paginator;
    
    this.delarr=[];
   // window.location.reload();
    this.router.navigate(["/expenses"]);
}
}


}
