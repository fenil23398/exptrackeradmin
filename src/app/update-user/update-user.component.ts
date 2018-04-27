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
  id:any;
  constructor(public _data:UserServiceService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para['uid'];
        alert(this.id);
        }
    );
  }

}
