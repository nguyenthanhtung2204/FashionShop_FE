import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as showAboutRoutes } from './show-about/show-about-routing.module';
import { routes as categoryProductRoutes } from './category-poduct/category-poduct-routing.module';
import { routes as dashboardRoutes } from './dashboard-infor/dashboard-info-routing.module';
export const routes: Routes =[
  {
    path: '',
    children: [
      { path: 'show-about', children: showAboutRoutes },
      { path: 'category-product', children: categoryProductRoutes },
      { path: 'dashboard-info', children : dashboardRoutes}

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
