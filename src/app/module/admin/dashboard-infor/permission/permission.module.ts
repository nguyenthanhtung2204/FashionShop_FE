import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { PermissionIndexComponent } from './permission-index/permission-index.component';
import { PermissionCurdComponent } from './permission-curd/permission-curd.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    PermissionIndexComponent,
    PermissionCurdComponent

  ]
})
export class PermissionModule { }
