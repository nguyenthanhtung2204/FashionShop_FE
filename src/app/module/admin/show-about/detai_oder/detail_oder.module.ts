import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOderIndexComponent } from './detail-oder-index/detail-oder-index.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { DetailOderCrudComponent } from './detail-oder-crud/detail-oder-crud.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [
    DetailOderIndexComponent,
    DetailOderCrudComponent
  ]
})
export class Detail_oderModule { }
