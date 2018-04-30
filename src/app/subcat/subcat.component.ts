import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { subcategory } from './subcatmodel';
import { SubcatdbService } from './subcatdb.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {
  scategories: subcategory[] = [];
  public delarr:subcategory[]=[];
  i:number=0;
  public mails:string='';
  dataSource: MatTableDataSource<subcategory>;
  displayedColumns = [' ', 'sub_cat_name', 'icon_image','cat_name', 's_fk_user_email', 'Action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 

  constructor(public _data:SubcatdbService,
  public router:Router) { }

  ngOnInit() {
    this.mails=localStorage.getItem('name'); 
    if(this.mails=='')
    {
      this.router.navigate(['/login']);    
    }
    this._data.getAllScategories().subscribe(
      (data: any) => {
        this.scategories = data;
        this.dataSource = new MatTableDataSource<subcategory>(this.scategories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  onSubCatDelete(element)
  {
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.deleteScategories(element.sub_cat_id).subscribe(
      (data:any)=>{
    
        this.dataSource.data.splice(this.dataSource.data.indexOf(element),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }

}


checkChange(item:subcategory)
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
    
     this._data.deleteScategories(this.delarr[this.i].sub_cat_id).subscribe(
    (data:any)=>{
  
      this.dataSource.data.splice( this.dataSource.data.indexOf(this.delarr[this.i]),1);
      this.dataSource.paginator=this.paginator;
     
    }
   
  );

    }
    this.dataSource.paginator=this.paginator;
    
    this.delarr=[];
   // window.location.reload();
    this.router.navigate(["/subcategory"]);
}
}

}
