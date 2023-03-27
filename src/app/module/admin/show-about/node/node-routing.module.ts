import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeIndexComponent } from './node-index/node-index.component';


export const routes: Routes = [
  {
    path: '',
    component: NodeIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class NodeRoutingModule { }
