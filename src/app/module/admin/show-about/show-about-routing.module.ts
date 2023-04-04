import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as nodeRouters } from './node/node-routing.module';
import { routes as paymentRouter } from './payment/payment-routing.module';
import { routes as couponRouter} from './coupon/coupon-routing.module';
import { routes as oderRouter} from './Oder/oder-routing.module'
import { routes as detail_oderRouter} from './detai_oder/detail_oder-routing.module'

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'node', children:nodeRouters},
      { path: 'payment', children:paymentRouter},
      { path: 'coupon', children:couponRouter},
      { path: 'oder', children:oderRouter},
      { path: 'detail_oder', children: detail_oderRouter}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAboutRoutingModule { }
