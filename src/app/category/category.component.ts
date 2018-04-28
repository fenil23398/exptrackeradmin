import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { CatdbService } from './catdb.service';
import { category } from './category-model';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorys: category[] = [];
  public delarr:category[]=[];
  i:number=0;
  dataSource: MatTableDataSource<category>;
  displayedColumns = [' ', 'cat_name', 'cicon_image', 'fk_user_email', 'Action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 
  constructor(public _data:CatdbService,
  public router:Router) { }

  ngOnInit() {

    this._data.getAllCategories().subscribe(
      (data: any) => {
        this.categorys = data;
        this.dataSource = new MatTableDataSource<category>(this.categorys);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  onCatDelete(element)
  {
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.deleteCategories(element.cat_id).subscribe(
      (data:any)=>{
    
        this.dataSource.data.splice(this.dataSource.data.indexOf(element),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }
}


checkChange(item:category)
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





}
