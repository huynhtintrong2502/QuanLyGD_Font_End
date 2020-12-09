import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingRoutes } from './layout-routing.routing';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingRoutes,
    RouterModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HomeComponent]
})
export class LayoutModule { }
