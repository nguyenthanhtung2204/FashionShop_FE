import { NgModule } from '@angular/core';
import { CommentComponent } from './comment.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes =[
  {
    path: '',
    component: CommentComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CommentRoutingModule { }
