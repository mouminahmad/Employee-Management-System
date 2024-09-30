import { Routes } from '@angular/router';
import { HomeComponent } from './Features/home/home.component';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { LoginComponent } from './Features/login/login.component';
import { LayoutComponent } from './Features/layout/layout.component';
import { EmployeeComponent } from './Features/employee/employee.component';
import { ProjectsComponent } from './Features/projects/projects.component';
import { ProjectEmplyeesComponent } from './Features/project-emplyees/project-emplyees.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo :'login',
        pathMatch: 'full'
    },

    {
        path: 'login' , 
        component:LoginComponent
    },

    {
        path: '',
        component:LayoutComponent,
        children:[
           {
            path: 'dashboard' , 
            component: DashboardComponent
           },
           {
            path: 'employee',
            component:EmployeeComponent
           },
           {
            path: 'project',
            component: ProjectsComponent
           },
           {
            path  :'projectEmployee',
            component : ProjectEmplyeesComponent
           }
        ]
    }

    

];
