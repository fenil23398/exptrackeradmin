import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { NotesDbService } from './notes-db.service';
import { Notes } from './notes_model';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
notes:Notes[];
dataSource: MatTableDataSource<Notes>;
displayedColumns = [' ', 'fk_user_email', 'notes_desc', 'notes_date' , 'Action'];
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

  constructor(public _data:NotesDbService,public router:Router) { }

  ngOnInit() {
    this._data.getAllNotes().subscribe(
      (data: any) => {
        this.notes = data;
        this.dataSource = new MatTableDataSource<Notes>(this.notes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )

  }
  onNoteDelete(element)
  {
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.deleteNotes(element.notes_id).subscribe(
      (data:any)=>{
    
        this.dataSource.data.splice(this.dataSource.data.indexOf(element),1);
        this.dataSource.paginator=this.paginator;
      
      }
    );
  }
}

}
