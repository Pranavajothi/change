import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup.component';

const routes: Routes = [{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'list', component: ListComponent },
{ path: '', component: LoginComponent }
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
