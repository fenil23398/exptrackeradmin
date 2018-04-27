import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Spends } from './exp-model';
@Injectable()
export class ExpDbService {

  public url:string="http://exptracker1.herokuapp.com/expenses/";
  public url2:string="http://exptracker1.herokuapp.com/spendsbyid/";
  constructor(public http: HttpClient) { }
  getALlSpends()
  {
    return this.http.get(this.url);
  }
  getALlSpendsById(id:string)
  {
      return this.http.get(this.url+id);
  }
   addSpends(item:Spends)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
   deleteSpends(id)
  {
     return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  public url1:string="http://localhost:3000/spends/";
  getExpenseById(id:number)
  {
     return this.http.get(this.url1+id);
  }
  getSpendsById(id:number)
  {
    return this.http.get(this.url2+id);
  }
   editSpends(item:Spends)
  {
       // alert('provider to update');
        let body=JSON.stringify(item);
        return this.http.put(this.url+item.expense_id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  
 

}
