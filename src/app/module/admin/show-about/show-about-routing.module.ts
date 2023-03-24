import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as aboutRoutes } from './abouts/abouts-routing.module';
import { routes as cartRoutes } from './product-cart/product-cart-routing.module';
import { routes as nodeRouters } from './node/node-routing.module';
import { routes as paymentRouter } from './payment/payment-routing.module';
import { routes as couponRouter} from './coupon/coupon-routing.module'

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'abouts', children: aboutRoutes },
      { path: 'product-cart', children: cartRoutes },
      { path: 'product-cart', children: cartRoutes },
      { path: 'node', children:nodeRouters},
      { path: 'payment', children:paymentRouter},
      { path: 'coupon', children:couponRouter}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAboutRoutingModule { }
