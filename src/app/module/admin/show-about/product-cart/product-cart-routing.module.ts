import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartComponent } from './product-cart.component';


export const routes: Routes = [
  {
    path: '',
    component: ProductCartComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ProductCartRoutingModule { }
