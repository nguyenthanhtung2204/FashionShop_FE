import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';



@NgModule({
  declarations: [TrangChuComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    TrangChuRoutingModule,
  ]
})
export class TrangChuModule { }
