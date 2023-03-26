import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite, ShopDienThoai } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<Favorite[]>{
    return this._api.favoritesAll();
  }
  selectOne(id:number):Observable<Favorite>{
    return this._api.favoritesGET(id);
  }
  insert(body: Favorite):Observable<Favorite>{
    return this._api.favoritesPOST(body);
  }
  update(id: number, body: Favorite): Observable<void>{
    return this._api.favoritesPUT(id,body);
  }
  delete(id: number, body:Favorite):Observable<void>{
    return this._api.favoritesDELETE(id);
  }
}
