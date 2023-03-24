import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleIndexComponent } from './sale-index/sale-index.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes =[
  {
    path: '',
    component: SaleIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class SaleRoutingModule { }
