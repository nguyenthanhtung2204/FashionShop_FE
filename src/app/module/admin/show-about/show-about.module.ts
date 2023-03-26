import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAboutRoutingModule } from './show-about-routing.module';
import { NbCardModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentModule } from './payment/payment.module';


@NgModule({
  imports: [
    CommonModule,
    ShowAboutRoutingModule,
    NbCardModule,
    MatDialogModule,
    PaymentModule,
  ]
})
export class ShowAboutModule { }
