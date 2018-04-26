import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Reminder } from './reminder-model';

@Injectable()
export class ReminderDbService {
  public url:string="http://exptracker1.herokuapp.com/reminder/"
  constructor(public http: HttpClient) { }
  getRemindersById(id:string)
  {
    return this.http.get(this.url+id);
  }
  addReminder(item:Reminder)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  deleteReminder(item:Reminder)
  {
    return this.http.delete(this.url+item.rem_id,{headers:new HttpHeaders().set('Content-Type','application/json')});

  }
  updateReminder(item:Reminder)
  {
  let body=JSON.stringify(item);
  return this.http.put(this.url+item.rem_id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  public url1:string="http://localhost:3000/reminderid/"
  getReminder(id:number)
  {
      return this.http.get(this.url1+id);
  }

}
