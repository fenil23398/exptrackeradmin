import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"

@Injectable()
export class SubcatdbService {
  url:string="http://exptracker1.herokuapp.com/scategories/";
  constructor(public http: HttpClient) { }
  getAllScategories()
  {
    return this.http.get(this.url);
  }
  deleteScategories(id)
  {
    return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
