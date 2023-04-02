import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Sale } from '../../../../../@core/data/FashionShopApi.service';
import { SaleService } from '../sale.service';

@Component({
  selector: 'ngx-sale-crud',
  templateUrl: './sale-crud.component.html',
  styleUrls: ['./sale-crud.component.scss']
})
export class SaleCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: SaleService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<SaleCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'Sản Phẩm Giảm Giá ';
  target: Sale = new Sale();
  listProduct: Object[] = []

  ListStatus: object[] = [{ text: 'Không Sử Dụng', value: 0 }, { text: 'Sử Dụng', value: 1 }];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
  }
  this.service.selectAllProduct().subscribe(res => {
    this.listProduct = res;
    console.log(res);
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
