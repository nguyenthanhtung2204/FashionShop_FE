import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopDienThoai,Node} from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private _api: ShopDienThoai ) { }
  selectAll(): Observable<Node[]>{
    return this._api.nodesAll();
  }
  selectOne(id:number):Observable<Node>{
    return this._api.nodesGET(id);
  }
  insert(body: Node):Observable<Node>{
    return this._api.nodesPOST(body);
  }
  update(id: number, body: Node): Observable<void>{
    return this._api.nodesPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.nodesDELETE(id);
  }
}
