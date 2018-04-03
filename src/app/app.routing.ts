import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddUserComponent } from './add-user/add-user.component';


const routing:Routes=[
    {path: '',redirectTo:'/home',pathMatch:'full'},
    {path: 'home',component:HomepageComponent},
    {path:'adduser',component:AddUserComponent}
];
export const routingarray=RouterModule.forRoot(routing);