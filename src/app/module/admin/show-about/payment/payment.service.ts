import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment, ShopDienThoai } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _api: ShopDienThoai ) { }

  selectAll(): Observable<Payment[]>{
    return this._api.paymentsAll();
  }
  selectOne(id:number):Observable<Payment>{
    return this._api.paymentsGET(id);
  }
  insert(body: Payment):Observable<Payment>{
    return this._api.paymentsPOST(body);
  }
  update(id: number, body: Payment): Observable<void>{
    return this._api.paymentsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.paymentsDELETE(id);
  }
}
