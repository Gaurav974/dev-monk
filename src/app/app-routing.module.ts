import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path :'' ,component : AuthComponent,
  
  },
  {
    path : 'home', component :HomeComponent,
    canActivate :[AuthGuard,UserRoleGuard],
    data :{
      userrole :['user','admin']
    },
  },
  {
    path : 'addmin' ,loadChildren : () => import('./shared/admin/admin.module').then(m =>m.AdminModule),
    canActivate :[AuthGuard,UserRoleGuard],
    data :{
      userrole :['admin']
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
