import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Sign_inRoutes } from './sign_in.routing';
import { RouterModule } from '@angular/router';
import { Sign_inComponent } from './sign_in.component';

@NgModule({
  imports: [
    CommonModule,
    Sign_inRoutes,
    RouterModule
  ],
  declarations: [Sign_inComponent,SigninComponent]
})
export class Sign_inModule { }
