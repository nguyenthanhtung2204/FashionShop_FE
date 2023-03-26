import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale, ShopDienThoai } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<Sale[]>{
    return this._api.salesAll();
  }
  selectOne(id:number):Observable<Sale>{
    return this._api.salesGET(id);
  }
  insert(body: Sale):Observable<Sale>{
    return this._api.salesPOST(body);
  }
  update(id: number, body: Sale): Observable<void>{
    return this._api.salesPUT(id,body);
  }
  delete(id: number, body:Sale):Observable<void>{
    return this._api.salesDELETE(id);
  }
}
