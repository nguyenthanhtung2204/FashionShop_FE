import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAboutRoutingModule } from './show-about-routing.module';
import { NbCardModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentModule } from './payment/payment.module';
import { NodeModule } from './node/node.module';
import { CouponModule } from './coupon/coupon.module';
import { OderModule } from './Oder/oder.module';
import { Detail_oderModule } from './detai_oder/detail_oder.module';


@NgModule({
  imports: [
    CommonModule,
    ShowAboutRoutingModule,
    NbCardModule,
    MatDialogModule,
    PaymentModule,
    NodeModule,
    CouponModule,
    OderModule,
    Detail_oderModule
  ]
})
export class ShowAboutModule { }
