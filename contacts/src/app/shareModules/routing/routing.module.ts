import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccessComponent } from '../../access/access.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';

const appRoutes: Routes = [
  {
    path: 'access',
    component: AccessComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
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
