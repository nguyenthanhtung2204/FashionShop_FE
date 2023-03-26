import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NbCardModule } from '@nebular/theme';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { ThemeModule } from "../../../../@theme/theme.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CategoryCrudComponent,
        CategoryIndexComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        NbCardModule,
        ThemeModule,
        FormsModule,
    ]
})
export class CategoryModule { }
