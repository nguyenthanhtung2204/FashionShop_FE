import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { FavoriteCrudComponent } from './favorite-crud/favorite-crud.component';
import { FavoriteIndexComponent } from './favorite-index/favorite-index.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [
    FavoriteCrudComponent,
    FavoriteIndexComponent
  ]
})
export class FavoriteModule { }
