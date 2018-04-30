import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
email:string='';
pass:any='';
  constructor() { }

  ngOnInit() {
  }

  onadd()
  {
    localStorage.setItem('name',this.email);
    localStorage.setItem('pass',this.pass);
     
  }
}
