import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatSortModule,MatInputModule
,MatPaginatorModule,MatIconModule,MatTableModule,MatOptionModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routingarray } from './app.routing';
import { UserServiceService } from './homepage/user-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routingarray,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    
    MatSortModule,MatInputModule
    ,MatPaginatorModule,
    MatOptionModule,
    MatIconModule,
    MatTableModule
  ],
 
  providers: [
    UserServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
