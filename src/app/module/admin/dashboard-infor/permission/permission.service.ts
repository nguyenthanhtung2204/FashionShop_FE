import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission, ShopDienThoai } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<Permission[]>{
    return this._api.permissionsAll();
  }
  selectOne(id:number):Observable<Permission>{
    return this._api.permissionsGET(id);
  }
  insert(body: Permission):Observable<Permission>{
    return this._api.permissionsPOST(body);
  }
  update(id: number, body: Permission): Observable<void>{
    return this._api.permissionsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.permissionsDELETE(id);
  }
}
