import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExppageComponent } from './exppage/exppage.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NotesComponent } from './notes/notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SubcatComponent } from './subcat/subcat.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
const routing:Routes=[
    {path: '',redirectTo:'/login',pathMatch:'full'},
    {path: 'home',component:HomepageComponent},
    {path: 'expenses',component:ExppageComponent},
    {path:'adduser',component:AddUserComponent},
     {path: 'notes',component:NotesComponent},
     {path : 'reminders',component:RemindersComponent},
     {path : 'category',component:CategoryComponent},
     {path : 'subcategory',component:SubcatComponent},
     {path : 'login',component:LoginComponent},
  ];
export const routingarray=RouterModule.forRoot(routing);