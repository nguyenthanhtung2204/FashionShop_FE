import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { CommentCrudComponent } from './comment-crud/comment-crud.component';
import { CommentIndexComponent } from './comment-index/comment-index.component';
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
    CommentCrudComponent,
    CommentIndexComponent
  ]
})
export class CommentModule { }
