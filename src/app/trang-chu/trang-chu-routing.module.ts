import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';

export const routes: Routes =[
  {
    path: '',
    component: TrangChuComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class TrangChuRoutingModule { }
