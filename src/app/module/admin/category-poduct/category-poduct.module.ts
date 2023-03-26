import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPoductRoutingModule } from './category-poduct-routing.module';
import { CategoryModule } from './category/category.module';
import { NbCardModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryPoductRoutingModule,
    CategoryModule,
    NbCardModule,
    MatDialogModule,
  ]
})
export class CategoryPoductModule { }
