import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPoductRoutingModule } from './category-poduct-routing.module';
import { CategoryModule } from './category/category.module';
import { NbCardModule } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductModule } from './product/product.module';
import { FavoriteModule } from './favorite/favorite.module';
import { CommentModule } from './comment/comment.module';
import { SaleModule } from './sale/sale.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryPoductRoutingModule,
    CategoryModule,
    NbCardModule,
    MatDialogModule,
    ProductModule,
    FavoriteModule,
    CommentModule,
    SaleModule
  ]
})
export class CategoryPoductModule { }
