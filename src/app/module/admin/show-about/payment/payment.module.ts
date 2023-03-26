import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { PaymentCrudComponent } from './payment-crud/payment-crud.component';
import { PaymentIndexComponent } from './payment-index/payment-index.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    PaymentCrudComponent,
    PaymentIndexComponent
  ]
})
export class PaymentModule { }
