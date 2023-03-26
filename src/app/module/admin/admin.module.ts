import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoryPoductModule } from './category-poduct/category-poduct.module';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { ShowAboutModule } from './show-about/show-about.module';
import { DashboardInforModule } from './dashboard-infor/dashboard-infor.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CategoryPoductModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    ShowAboutModule,
    DashboardInforModule
  ],
  declarations: []
})
export class AdminModule { }
