import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Favorite } from '../../../../../@core/data/FashionShopApi.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'ngx-favorite-crud',
  templateUrl: './favorite-crud.component.html',
  styleUrls: ['./favorite-crud.component.scss']
})
export class FavoriteCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: FavoriteService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<FavoriteCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'Sản Phẩm Yêu Thích';
  target: Favorite = new Favorite();
  User: Object[] = []
  Product: Object[] = []

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
    this.service.selectAllUser().subscribe(res => {
      this.User = res;
    })  
    this.service.selectAllProduct().subscribe(res =>{
      this.Product = res;
    })
  }
  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res != null){
        this.target = res 
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.closeDialog(false)
      }
    })
  }

  save(): void {
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this.service.insert(this.target).subscribe((res) => {
        if(res === null){
          this.loadData();
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(false);
        } else {
          this.commonService.toastrDanger("Không thể thêm !!!");
          this.closeDialog(true);
        }
      })
    } else {
      this.service.update(this.dataRef.key,this.target).subscribe((res) => {
        if(res === null){
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(false);
        } else {
          this.commonService.toastrDanger("Không thể cập nhật bài viết !!!");
          this.closeDialog(true);
        }
      })
    }
  }
  closeDialog(value){
    this.dialogRef.close(value)
  }
}
