import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExppageComponent } from './exppage/exppage.component';
const routing:Routes=[
    {path: '',redirectTo:'/home',pathMatch:'full'},
    {path: 'home',component:HomepageComponent},
    {path: 'expense',component:ExppageComponent},
    // {path: 'notes',component}
];
export const routingarray=RouterModule.forRoot(routing);