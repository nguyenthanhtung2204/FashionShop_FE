import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentIndexComponent } from './payment-index/payment-index.component';

export const routes: Routes = [
  {
    path: '',
    component: PaymentIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class PaymentRoutingModule { }
