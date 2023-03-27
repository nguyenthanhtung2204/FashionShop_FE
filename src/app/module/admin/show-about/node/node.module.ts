import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NodeIndexComponent } from './node-index/node-index.component';
import { NodeCrudComponent } from './node-crud/node-crud.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    NodeIndexComponent,
    NodeCrudComponent
  ]
})
export class NodeModule { }
