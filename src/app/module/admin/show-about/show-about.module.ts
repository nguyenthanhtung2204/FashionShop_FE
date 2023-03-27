import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAboutRoutingModule } from './show-about-routing.module';
import { NbCardModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentModule } from './payment/payment.module';
import { NodeModule } from './node/node.module';
import { CouponModule } from './coupon/coupon.module';


@NgModule({
  imports: [
    CommonModule,
    ShowAboutRoutingModule,
    NbCardModule,
    MatDialogModule,
    PaymentModule,
    NodeModule,
    CouponModule
  ]
})
export class ShowAboutModule { }
