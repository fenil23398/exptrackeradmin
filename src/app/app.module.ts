import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatSortModule,MatInputModule
,MatPaginatorModule,MatIconModule,MatTableModule,MatOptionModule,
MatSelectModule,MatRadioModule,MatDatepickerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routingarray } from './app.routing';
import { UserServiceService } from './homepage/user-service.service';
import { ExppageComponent } from './exppage/exppage.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NotesComponent } from './notes/notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ExpDbService } from './exppage/exp-db.service';
import { ReminderDbService } from './reminders/reminder-db.service';
import { NotesDbService } from './notes/notes-db.service';
import { CategoryComponent } from './category/category.component';
import { SubcatComponent } from './subcat/subcat.component';
import { CatdbService } from './category/catdb.service';
import { SubcatdbService } from './subcat/subcatdb.service';
import { LoginComponent } from './login/login.component';
import { LogindbService } from './login/logindb.service';
import { SignupComponent } from './signup/signup.component';
import { SignupdbService } from './signup/signupdb.service';
import { UpdateUserComponent } from './update-user/update-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ExppageComponent,
    AddUserComponent,
    NotesComponent,
    RemindersComponent,
    CategoryComponent,
    SubcatComponent,
    LoginComponent,
    SignupComponent,
    UpdateUserComponent
    
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routingarray,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,MatSortModule,MatInputModule,MatPaginatorModule,
    MatOptionModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,MatRadioModule,MatDatepickerModule
  ],
 
  providers: [
    UserServiceService,
    ExpDbService,
    ReminderDbService,
    NotesDbService,
    CatdbService,
    SubcatdbService,
    LogindbService,
    SignupdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
