import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../../../../../@core/customs/common.service';
import { OderService } from '../oder.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Order } from '../../../../../@core/data/FashionShopApi.service';

@Component({
  selector: 'ngx-oder-crud',
  templateUrl: './oder-crud.component.html',
  styleUrls: ['./oder-crud.component.scss']
})
export class OderCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: OderService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<OderCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'Hóa Đơn';
  target: Order = new Order();
  listCoupon: any[];
  listUser: any[];
  listPayment: any[];
  listNode: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
    this.service.selectAllcoupon().subscribe(res => {
      this.listCoupon = res;
    })  
    this.service.selectAllNode().subscribe(res => {
      this.listNode = res;
    })  
    this.service.selectAllPayment().subscribe(res => {
      this.listPayment = res;
    })  
    this.service.selectAllcoupon().subscribe(res => {
      this.listCoupon = res;
    })  
    this.service.selectAlluser().subscribe(res => {
      this.listUser = res;
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
