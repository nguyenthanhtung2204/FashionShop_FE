import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Category } from '../../../../../@core/data/FashionShopApi.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ngx-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.scss']
})
export class CategoryCrudComponent implements OnInit {

  constructor(
    private CommonService: CommonService,
    private service: CategoryService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<CategoryCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'Lại Sản Phẩm';
  target: Category = new Category();

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
  }
  }
  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res != null){
        this.target = res 
      } else {
        this.CommonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.closeDialog(false)
      }
    })
  }

  save(): void {
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this.service.insert(this.target).subscribe((res) => {
        if(res === null){
          this.loadData();
          this.CommonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(false);
        } else {
          this.CommonService.toastrDanger("Không thể thêm người dùng này !!!");
          this.closeDialog(true);
        }
      })
    } else {
      this.service.update(this.dataRef.key,this.target).subscribe((res) => {
        if(res === null){
          this.CommonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(false);
        } else {
          this.CommonService.toastrDanger("Không thể cập nhật bài viết !!!");
          this.closeDialog(true);
        }
      })
    }
  }
  closeDialog(value){
    this.dialogRef.close(value)
  }
  }