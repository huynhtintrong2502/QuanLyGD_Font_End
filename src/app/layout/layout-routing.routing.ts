import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'films',
        component: FilmsComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
   },
];

export const LayoutRoutingRoutes = RouterModule.forChild(routes);
