import { Component, OnInit } from '@angular/core';
import { LogindbService } from './logindb.service';
import { Router } from '@angular/router';
import { NgForm,FormControl } from '@angular/forms';
import { UserServiceService } from '../homepage/user-service.service';
import { Users } from '../homepage/user_model';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  pass:string;
  id:number=0;
  img:string;
  dpass:number;
  name:string;
  mobno:string;
  eid:string;
  msg:string;
  constructor(public _data:LogindbService,public _r:Router,public _datause:UserServiceService) { }

  ngOnInit() {
  }
  onlogin()
  {
    let item=new Users(this.id,this.email,this.name,this.mobno,this.img,this.pass,this.dpass);
    this._data.getUserByLogin(item).subscribe(
      (data)=>{
        if(data=='')
        {
          alert('Email Id and Password is Incorrect');
        }
        else{
          
          localStorage.setItem('name',this.email);
          localStorage.setItem('pass',this.pass);
          this.eid=localStorage.getItem('name');      
          this._r.navigate(['/home']);
        
        }
      },
      function(e)
      {
        alert(e);
      },
      function()
      {
      }
    );
  }
  onSignUp()
  {
    this._r.navigate(['/signup']);
  }
  }
