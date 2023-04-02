import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, Product, ShopDienThoai, User } from '../../../../@core/data/FashionShopApi.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _api: ShopDienThoai ) { }

  selectAll(): Observable<Comment[]>{
    return this._api.commentsAll();
  }
  selectOne(id:number):Observable<Comment>{
    return this._api.commentsGET(id);
  }
  insert(body: Comment):Observable<Comment>{
    return this._api.commentsPOST(body);
  }
  update(id: number, body: Comment): Observable<void>{
    return this._api.commentsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.commentsDELETE(id);
  }
  selectAllUser(): Observable<User[]>{
    return this._api.usersAll();
  }
  selectAllProduct(): Observable<Product[]>{
    return this._api.productsAll();
  }
}
