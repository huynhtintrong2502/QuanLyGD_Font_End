import { Routes, RouterModule } from '@angular/router';
import { Sign_inComponent } from './sign_in.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { 
    path: 'sign_in',
    component: Sign_inComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      }
    ]
   },
];

export const Sign_inRoutes = RouterModule.forChild(routes);
