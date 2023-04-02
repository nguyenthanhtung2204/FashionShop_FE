import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../../../../../@core/customs/common.service';
import { Detail_oderService } from '../detail_oder.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { DetailOder } from '../../../../../@core/data/FashionShopApi.service';

@Component({
  selector: 'ngx-detail-oder-crud',
  templateUrl: './detail-oder-crud.component.html',
  styleUrls: ['./detail-oder-crud.component.scss']
})
export class DetailOderCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: Detail_oderService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<DetailOderCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'Chi Tiết Hóa Đơn';
  target: DetailOder = new DetailOder();
  listOder: any[];
  listProduct: any[];


  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
    this.service.selectAllOder().subscribe(res => {
      this.listOder = res;
    })  
    this.service.selectAllProduct().subscribe(res => {
      this.listProduct = res;
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
