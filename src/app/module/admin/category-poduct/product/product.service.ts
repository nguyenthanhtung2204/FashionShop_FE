import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product, ShopDienThoai } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<Product[]>{
    return this._api.productsAll();
  }
  selectOne(id:number):Observable<Product>{
    return this._api.productsGET(id);
  }
  insert(body: Product):Observable<Product>{
    return this._api.productsPOST(body);
  }
  update(id: number, body: Product): Observable<void>{
    return this._api.productsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.productsDELETE(id);
  }
  selectAllProduct(): Observable<Category[]>{
    return this._api.categoriesAll();
  }
}