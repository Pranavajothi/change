import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user-signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'user-login', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'user', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: '', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
