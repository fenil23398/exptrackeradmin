import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
@Injectable()
export class LogindbService {
  public url:string='http://exptracker1.herokuapp.com/login/';
  public url1:string='http://exptracker1.herokuapp.com/forgetpass/';
  constructor(public http: HttpClient) { }
  getUserByLogin(item)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  sendMail(item)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
