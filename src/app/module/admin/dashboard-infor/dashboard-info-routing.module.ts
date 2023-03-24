import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes as UserRouter } from './user/user-routing.module';
import { routes as PermissionRouter } from './permission/permission-routing.module';
export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'user', children: UserRouter},
      { path: 'permission', children: PermissionRouter}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardInfoRoutingModule { }
