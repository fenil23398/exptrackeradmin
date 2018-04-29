import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { UserServiceService } from '../homepage/user-service.service';
import { Users } from '../homepage/user_model';
import { SignupdbService } from './signupdb.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uid:any;
  umail:string;
  upass:string;
  uname:string;
  umobno:string;
  udpass:any;
  uimg:string='defaultimg.png';
  selectedFile: File = null;
  
  constructor(public _data:SignupdbService,public _r:Router) { }

  ngOnInit() {
  }
  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
   
  }
onSignUp()
{
  const fd = new FormData();

    if(this.selectedFile == null)
    {
      
            this._data.addNormalUsers(new Users(this.uid, this.umail, this.uname, this.umobno, this.uimg,this.upass,this.udpass)).subscribe(
              (data) => {
                alert('Successfully sign up ');
                localStorage.setItem('name', this.umail);
                 localStorage.setItem('pass', this.upass);
                this._r.navigate(['/home']);
           },
           function(e)
           {
             alert('error');
           }
         );
       }
    
    else
    {
      fd.append('user_id',this.uid);
      fd.append('user_email',this.umail);
      fd.append('user_name',this.uname);
      fd.append('user_mob_no',this.umobno);
    
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('user_pass',this.upass);
    fd.append('user_dpass',this.udpass);
    this._data.addUsers(fd).subscribe(
      (data)=>{

     alert('Successfully login');
     localStorage.setItem('name',this.umail);
    localStorage.setItem('pass',this.upass);
    this._r.navigate(['/home']);
   }
 );

    }
  
    
  
}
onSignIn()
{
  this._r.navigate(['/login']);
}
}
