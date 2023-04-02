import { Injectable } from '@angular/core';
import { Coupon, Node, Order, Payment, ShopDienThoai, User } from '../../../../@core/data/FashionShopApi.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OderService {
  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<Order[]>{
    return this._api.ordersAll();
  }
  selectOne(id:number):Observable<Order>{
    return this._api.ordersGET(id);
  }
  insert(body: Order):Observable<Order>{
    return this._api.ordersPOST(body);
  }
  update(id: number, body: Order): Observable<void>{
    return this._api.ordersPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.ordersDELETE(id);
  }
  selectAllPayment(): Observable<Payment[]>{
    return this._api.paymentsAll();
  }
  selectAllNode():Observable<Node[]>{
    return this._api.nodesAll();
  }
  selectAllcoupon(): Observable<Coupon[]>{
    return this._api.couponsAll();
  }
  selectAlluser(): Observable<User[]>{
    return this._api.usersAll();
  }
}
