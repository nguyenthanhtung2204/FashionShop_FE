import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { PAGE_SIZE, STATUS_ACTION } from '../../../../../@core/customs/constants';
import { Category } from '../../../../../@core/data/FashionShopApi.service';
import { DialogConfirmComponent } from '../../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { CategoryCrudComponent } from '../category-crud/category-crud.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ngx-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.scss']
})
export class CategoryIndexComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private service: CategoryService,
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
    this.dialog.open(CategoryCrudComponent,
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
    this.dialog.open(CategoryCrudComponent,
      this.commonService.configDialog("70%",{
        key: key,
        actionType: STATUS_ACTION.detail
      }))
      .afterClosed()
      .subscribe(() => {})
  }

  openEditDialog(key: number){
    this.dialog.open(CategoryCrudComponent,
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
