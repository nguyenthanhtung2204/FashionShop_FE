import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as productRoutes } from './product/product-routing.module';
import { routes as categoryRoutes } from './category/category-routing.module';
import { favorite as favoriteRoutes} from './favorite/favorite-routing.module';
import { routes as saleRoutes} from './sale/sale-routing.module';
import { routes as commentRouter} from './comment/comment-routing.module'


export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'products', children: productRoutes },
      { path: 'category', children: categoryRoutes},
      { path: 'favorite', children: favoriteRoutes},
      { path: 'sale', children:saleRoutes},
      { path: 'comment', children:commentRouter}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CategoryPoductRoutingModule { }
