import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { CouponCrudComponent } from './coupon-crud/coupon-crud.component';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    CouponCrudComponent,
    CouponIndexComponent
  ]
})
export class CouponModule { }
