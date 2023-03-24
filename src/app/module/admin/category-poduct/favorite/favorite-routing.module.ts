import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteIndexComponent } from './favorite-index/favorite-index.component';

export const favorite: Routes =[
  {
    path: '',
    component: FavoriteIndexComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(favorite)]
})
export class FavoriteRoutingModule { }
