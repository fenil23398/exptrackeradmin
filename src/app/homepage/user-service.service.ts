import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";



 @Injectable()
 export class UserServiceService {



 public url:string="http://exptracker1.herokuapp.com/userss/";

  constructor(public http: HttpClient) {
    console.log('Hello UserdbProvider Provider');
  }
  getAllUsers()
  {
    return this.http.get(this.url);
  }
 getUsersById(id:string)
 {
      return this.http.get(this.url+id);
 }
 deleteUser(item)
 {
   return this.http.delete(this.url+item.user_id)
 }
 public url1:string="http://exptracker1.herokuapp.com/chagepass/";
//  changePassword(id:string,item:Users)
//  {
// alert(id);
//   let body=JSON.stringify(item);
//   return this.http.put(this.url1+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
//  }
  fd = new FormData();

 updateUsers(id:string,fd)
  {
    return this.http.put(this.url+id, fd)
  }
}
