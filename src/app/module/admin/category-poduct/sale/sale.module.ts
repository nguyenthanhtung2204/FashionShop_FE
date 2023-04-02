import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { SaleCrudComponent } from './sale-crud/sale-crud.component';
import { SaleIndexComponent } from './sale-index/sale-index.component';
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
    SaleCrudComponent,
    SaleIndexComponent
  ]
})
export class SaleModule { }
