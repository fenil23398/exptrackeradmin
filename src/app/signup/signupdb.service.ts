import { Injectable } from '@angular/core';
import { Users } from '../homepage/user_model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable()
export class SignupdbService {
  public url:string='http://exptracker1.herokuapp.com/userss/';
  public url1:string='http://exptracker1.herokuapp.com/signup/';
  constructor(public http: HttpClient) { }
  fd = new FormData();
  addUsers(fd)
  {
    
    return this.http.post(this.url,fd);
  }
addNormalUsers(item:Users)
{
  let body = JSON.stringify(item);
    return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
}
