import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs/Rx';
import { Router,ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../homepage/user-service.service';
import { Users } from '../homepage/user_model';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  _Subscription:Subscription;
  eid:any;
  id:any;
  email:string;
  fname:string;
  mno:string;
  img:string;
  f:number=0;
  password:string;
  public mails:string='';
  edpassword:any;
  selectedFile:File=null; 
  arr:Users[]=[];
  constructor(public _data:UserServiceService,public _r:Router,
    public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this.mails=localStorage.getItem('name'); 
    if(this.mails=='')
    {
      this._r.navigate(['/login']);    
    }
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para['uid'];
        
        }
    );
    this._data.getUsersById(this.id).subscribe(
      (data:Users[])=>{
      this.email=data[0].user_email;
      this.fname=data[0].user_name;
      this.mno=data[0].user_mob_no;
      this.img=data[0].user_img;
      this.password=data[0].user_pass;
      this.edpassword=data[0].user_dpass;
      }
    );
  }
  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
   
  }
   onEditProfile()
   {
   
   
     if(this.selectedFile==null)
     {
     let item=new Users(this.eid,this.email,this.fname,this.mno,this.img,this.password,this.edpassword);
this._data.updateNormalUser(this.email,item).subscribe(

  (data: any) => {
   alert('updated');
    this._r.navigate(['/home']);
   
  });
 }
    
    
     else
     {
           const fd = new FormData();
           
           fd.append('user_id', this.eid);
           fd.append('user_email', this.email);
           
           fd.append('user_name', this.fname);
           fd.append('user_mob_no', this.mno);
           
           fd.append('image',this.selectedFile,this.selectedFile.name);
           fd.append('user_pass', this.password);
           fd.append('user_dpass', this.edpassword);
     this._data.updateUsers(this.email,fd).subscribe(

       (data: any) => {
        alert('updated');
         this._r.navigate(['/home']);
        
       });
      }

    }

  }
