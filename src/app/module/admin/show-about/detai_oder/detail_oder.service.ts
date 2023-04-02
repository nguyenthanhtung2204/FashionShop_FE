import { Injectable } from '@angular/core';
import { DetailOder, Order, Product, ShopDienThoai } from '../../../../@core/data/FashionShopApi.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Detail_oderService {
  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<DetailOder[]>{
    return this._api.detailOdersAll();
  }
  selectOne(id:number):Observable<DetailOder>{
    return this._api.detailOdersGET(id);
  }
  insert(body: DetailOder):Observable<DetailOder>{
    return this._api.detailOdersPOST(body);
  }
  update(id: number, body: DetailOder): Observable<void>{
    return this._api.detailOdersPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.detailOdersDELETE(id);
  }
  selectAllOder(): Observable<Order[]>{
    return this._api.ordersAll();
  }
  selectAllProduct():Observable<Product[]>{
    return this._api.nodesAll();
  }
}
