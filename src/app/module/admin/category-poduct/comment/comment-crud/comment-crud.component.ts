import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../../../../../@core/customs/common.service';
import { CommentService } from '../comment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Comment } from '../../../../../@core/data/FashionShopApi.service';

@Component({
  selector: 'ngx-comment-crud',
  templateUrl: './comment-crud.component.html',
  styleUrls: ['./comment-crud.component.scss']
})
export class CommentCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: CommentService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<CommentCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'bài viết';
  target: Comment = new Comment();
  listProduct: Object[] = []
  listUser: Object[] = []

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    } 
    this.service.selectAllProduct().subscribe(res => {
      this.listProduct = res;
    }) 
    this.service.selectAllUser().subscribe(res => {
      this.listUser = res;
    }) 
  }

  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res != null){
        this.target = res;
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
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
          this.commonService.toastrDanger("Không thể thêm người dùng này !!!");
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
