import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { UserServiceService } from '../homepage/user-service.service';
import { Users } from '../homepage/user_model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  uid:any;
  email:string;
  password:string;
  fname:string;
  mno:string;
  edpassword:any;
  img:string='defaultimg.png';
  selectedFile: File = null;
  constructor(public _data:UserServiceService,public _r:Router,public http:HttpClient) { }
  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
   
  }
  ngOnInit() {
  }
 add()
  {
   
 const fd = new FormData();

    if(this.selectedFile==null)
    {
     
            this._data.addNormalUsers(new Users(this.uid,this.email,this.fname,this.mno,this.img,this.password,this.edpassword)).subscribe(
              (data)=>{
       
           alert('inserted');
                localStorage.setItem('name',this.email);
                 localStorage.setItem('pass',this.password);
            this._r.navigate(['/home']);
           });
         
    }
    else
    {
      fd.append('user_id',this.uid);
      fd.append('user_email',this.email);
      fd.append('user_name',this.fname);
      fd.append('user_mob_no',this.mno);
    
    fd.append("image", this.selectedFile, this.selectedFile.name);
    fd.append('user_pass',this.password);
    fd.append('user_dpass',this.edpassword);
    this._data.addUsers(fd).subscribe(
      (data)=>{

     alert('inserted');
     localStorage.setItem('name',this.email);
    localStorage.setItem('pass',this.password);
     this._r.navigate(['/home']); 
   }
 );

    }
  }

}
