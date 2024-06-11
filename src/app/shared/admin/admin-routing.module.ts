import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineCahrtComponent } from './components/dashboard/line-cahrt/line-cahrt.component';
import { BarCahrtComponent } from './components/dashboard/bar-cahrt/bar-cahrt.component';
import { TableCahrtComponent } from './components/dashboard/table-cahrt/table-cahrt.component';

const routes: Routes = [
  {
    path :'',component :DashboardComponent,
    children :[
        {
            path :'linechart' ,component :LineCahrtComponent
        },
        {
            path :'barchart' ,component :BarCahrtComponent
        },
        {
            path :'tablechart' ,component :TableCahrtComponent
        }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports :[RouterModule,CommonModule]
})
export class AdminRoutingModule {
    
 }
