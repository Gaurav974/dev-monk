import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar-cahrt',
  templateUrl: './bar-cahrt.component.html',
  styleUrls: ['./bar-cahrt.component.scss']
})
export class BarCahrtComponent implements OnInit {
  ngOnInit(): void {
  }

  public chartOptions: Partial<{
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
  }> |any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Revenue',
          data: [5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000, 21000, 23000, 25000, 27000],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        zoom: {
          enabled: true,
        },
      },
      
      title: {
        text: 'Monthly Revenue Breakdown\nfor the Current Year',
        style: {
          fontSize: '9px'  
        }
      }
    };
  }
 

}



