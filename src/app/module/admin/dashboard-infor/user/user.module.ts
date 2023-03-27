import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../@theme/theme.module';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    NgSelectModule,
  ],
  declarations: [
    UserCrudComponent,
    UserIndexComponent
  ]
})
export class UserModule { }
