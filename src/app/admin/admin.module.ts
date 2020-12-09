import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingRoutes } from './admin-routing.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingRoutes
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
