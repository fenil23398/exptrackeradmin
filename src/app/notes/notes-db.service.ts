import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Notes } from './notes_model';
@Injectable()
export class NotesDbService {

  public url:string="http://exptracker1.herokuapp.com/notes/";
  public url2:string="http://exptracker1.herokuapp.com/notedesc/";
  constructor(public http: HttpClient) { }
  getAllNotes()
  {
    return this.http.get(this.url);
  }
  deleteNotes(id:number)
  {
    return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  getNotesById(id:string){
      return this.http.get(this.url+id);
  }
  getNoteDesc(id:number){
    return this.http.get(this.url2+id);
  }
}
