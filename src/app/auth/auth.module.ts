import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RenewpasswordComponent } from './renewpassword/renewpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RenewpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
