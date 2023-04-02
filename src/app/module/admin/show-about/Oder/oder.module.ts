import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { OderIndexComponent } from './oder-index/oder-index.component';
import { OderCrudComponent } from './oder-crud/oder-crud.component';


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
    OderIndexComponent,
    OderCrudComponent
  ]
})
export class OderModule { }
