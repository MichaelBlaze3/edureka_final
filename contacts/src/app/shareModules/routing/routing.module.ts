import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccessComponent } from '../../access/access.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from '../../users/users.component';
import { ContactsComponent } from '../../contacts/contacts.component';


const appRoutes: Routes = [
  {
    path: 'access',
    component: AccessComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'contacts', component: ContactsComponent
      }
    ]
  },
  { path: '**', redirectTo: 'access/login'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }

export const routingComponents = [AccessComponent, LoginComponent, RegisterComponent, UsersComponent, DashboardComponent, ContactsComponent];
