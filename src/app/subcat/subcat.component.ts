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
}
