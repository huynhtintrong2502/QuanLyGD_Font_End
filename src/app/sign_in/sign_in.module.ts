import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { MyRouteRoutes } from './my-route.routing';
import { RouterModule } from '@angular/router';
import { Sign_inComponent } from './sign_in.component';

@NgModule({
  imports: [
    CommonModule,
    MyRouteRoutes,
    RouterModule,
  ],
  declarations: [Sign_inComponent,SigninComponent]
})
export class Sign_inModule { }
