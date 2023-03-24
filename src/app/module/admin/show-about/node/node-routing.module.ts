import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: NodeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class NodeRoutingModule { }
