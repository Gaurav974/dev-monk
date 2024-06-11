import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { LineCahrtComponent } from './components/dashboard/line-cahrt/line-cahrt.component';
import { BarCahrtComponent } from './components/dashboard/bar-cahrt/bar-cahrt.component';
import { TableCahrtComponent } from './components/dashboard/table-cahrt/table-cahrt.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardComponent,
    LineCahrtComponent,
    BarCahrtComponent,
    TableCahrtComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgApexchartsModule

  ]
})
export class AdminModule { }
