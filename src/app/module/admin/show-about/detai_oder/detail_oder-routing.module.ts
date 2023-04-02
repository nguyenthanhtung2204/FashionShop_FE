import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailOderIndexComponent } from './detail-oder-index/detail-oder-index.component';


export const routes: Routes = [
  {
    path: '',
    component: DetailOderIndexComponent  
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class Detail_oderRoutingModule { }
