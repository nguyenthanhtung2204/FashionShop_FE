import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PermissionIndexComponent } from './permission-index/permission-index.component';

export const routes: Routes =[
  {
    path: '',
    component: PermissionIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class PermissionRoutingModule { }
