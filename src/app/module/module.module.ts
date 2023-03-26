import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CategoryModule } from './admin/category-poduct/category/category.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { DashboardInfoRoutingModule } from './admin/dashboard-infor/dashboard-info-routing.module';

@NgModule({
  declarations: [ModuleComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    ThemeModule,
    NbMenuModule,
    AdminModule,
    MatDialogModule,
    FormsModule,
    DashboardInfoRoutingModule
  ]
})
export class ModuleModule { }
