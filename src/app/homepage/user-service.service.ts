import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";


import { Users } from './user_model';
 @Injectable()
 export class UserServiceService {



 public url:string="http://exptracker1.herokuapp.com/userss/";
 fd = new FormData();
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
 public url1:string="http://exptracker1.herokuapp.com/chagepass/";
//  changePassword(id:string,item:Users)
//  {
// alert(id);
//   let body=JSON.stringify(item);
//   return this.http.put(this.url1+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
//  }
  

 updateUsers(id:string,fd)
  {
    
    return this.http.put(this.url+id,fd);
  }
  deleteUsers(id:string)
  {
    return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  public url2:string='http://exptracker1.herokuapp.com/userss/';
  public url3:string='http://exptracker1.herokuapp.com/signup/';
  public url4:string='http://exptracker1.herokuapp.com/updateNormalUser/';
  addUsers(fd)
  {
    
    return this.http.post(this.url,fd);
  }
addNormalUsers(item:Users)
{
  let body=JSON.stringify(item);
    return this.http.post(this.url3,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
updateNormalUser(id:string,item:Users)
{
  
  let body=JSON.stringify(item);
  return this.http.put(this.url4+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
  
}
