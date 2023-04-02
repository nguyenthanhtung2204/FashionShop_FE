import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { Detail_oderService } from '../detail_oder.service';
import { DetailOderCrudComponent } from '../detail-oder-crud/detail-oder-crud.component';
import { STATUS_ACTION } from '../../../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'ngx-detail-oder-index',
  templateUrl: './detail-oder-index.component.html',
  styleUrls: ['./detail-oder-index.component.scss']
})
export class DetailOderIndexComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private service: Detail_oderService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  search() {
    this.loadData();
  }
  target: any = {
    data: []
  };

  loadData(){
    this.service.selectAll().subscribe(res => {
      this.target = res;
    });
  }

  openCreateDialog(){
    this.dialog.open(DetailOderCrudComponent,
      this.commonService.configDialog("70%",{
        key: null,
        actionType: STATUS_ACTION.create
      })
    )
    .afterClosed()
    .subscribe((res) => {
      if(res){
        this.loadData();
      }
    })
  }

  openDetailDialog(key: number){
    this.dialog.open(DetailOderCrudComponent,
      this.commonService.configDialog("70%",{
        key: key,
        actionType: STATUS_ACTION.detail
      }))
      .afterClosed()
      .subscribe(() => {})
  }

  openEditDialog(key: number){
    this.dialog.open(DetailOderCrudComponent,
      this.commonService.configDialog("70%",{
        key: key,
        actionType: STATUS_ACTION.edit
      }))
      .afterClosed()
      .subscribe(res => {
        if(res){
          this.loadData();
        }
      })
  }

  openDeleteDialog(key: number,title?: string){
    this.dialog.open(DialogConfirmComponent,
      this.commonService.configDialog("30%",{
        title: 'Xác nhận',
        message: `Bạn có chắc chắn xóa chi tiết <b>${title}</b> ?`,
        color: 'text-warning',
        type: 1,
        icon: 'exclamation-triangle',
        isAppend: true
      }))
      .afterClosed().subscribe((dialog) => {
        if(dialog){
          this.service.delete(key).subscribe((res) => {
            if(res == null){
              this.commonService.toastrSuccess();
              this.loadData();
            } else {
              this.commonService.toastrDanger("Không xóa được !!!");
            }
          })
        }
      })
  }
}
