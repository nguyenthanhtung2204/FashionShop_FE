import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OderIndexComponent } from './oder-index/oder-index.component';


export const routes: Routes = [
  {
    path: '',
    component: OderIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class OderRoutingModule { }
