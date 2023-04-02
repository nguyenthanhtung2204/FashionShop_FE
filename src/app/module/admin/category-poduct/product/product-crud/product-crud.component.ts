import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Product } from '../../../../../@core/data/FashionShopApi.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'ngx-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: ProductService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<ProductCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'bài viết';
  target: Product = new Product();
  listProduct: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    } else {
      this.target.image = null;
    }
    this.service.selectAllProduct().subscribe(res => {
      this.listProduct = res;
    })  
  }

  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res != null){
        this.target = res;
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

  handleUpload(event: any){
    const files = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      this.target.image = reader.result.toString();
    };
  }

  @ViewChild('avatar') avatar: ElementRef;
  DeleteImg(){
    this.target.image = null;
    let input = <HTMLInputElement>document.getElementById("loadImage");
    input.value = null;
  }

  closeDialog(value){
    this.dialogRef.close(value)
  }
}
