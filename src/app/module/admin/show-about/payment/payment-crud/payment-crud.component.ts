import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Payment } from '../../../../../@core/data/FashionShopApi.service';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'ngx-payment-crud',
  templateUrl: './payment-crud.component.html',
  styleUrls: ['./payment-crud.component.scss']
})
export class PaymentCrudComponent implements OnInit {

  constructor(
    private CommonService: CommonService,
    private service: PaymentService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<PaymentCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'Lại Sản Phẩm';
  target: Payment = new Payment();

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
          this.CommonService.toastrDanger("Không thể thêm !!!");
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
