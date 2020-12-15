import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';
import { FilmsComponent } from './films/films.component';
import { List_filmComponent } from './list_film/list_film.component';

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
      },
      {
        path: 'list_film',
        component: List_filmComponent
      },
    ]
   },
];

export const LayoutRoutingRoutes = RouterModule.forChild(routes);
