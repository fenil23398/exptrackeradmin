import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()
export class CatdbService {
  url:string="https://exptracker1.herokuapp.com/categories/";
  constructor(public http: HttpClient) { }
  
  getAllCategories()
  {
    return this.http.get(this.url);
  }
  deleteCategories(id:string)
  {
    return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
