import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { Sign_inComponent } from './sign_in.component';

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

export const MyRouteRoutes = RouterModule.forChild(routes);
