import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardInfoRoutingModule } from './dashboard-info-routing.module';
import { DashboardModule } from '../../../pages/dashboard/dashboard.module';
import { NbCardModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { PermissionModule } from './permission/permission.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardInfoRoutingModule,
    DashboardModule,
    NbCardModule,
    MatDialogModule,
    PermissionModule
  ],
  declarations: []
})
export class DashboardInforModule { }
