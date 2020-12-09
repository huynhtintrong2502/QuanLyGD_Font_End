import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent
   },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
