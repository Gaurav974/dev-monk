import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-line-cahrt',
  templateUrl: './line-cahrt.component.html',
  styleUrls: ['./line-cahrt.component.scss']
})
export class LineCahrtComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions : Partial<ChartOptions> |any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Daily Sales",
          data: [150, 200, 170, 220, 210, 190, 230]  // Sample sales data
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Daily Sales for the Past Week"
      },
      xaxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      }
    };
  }
  ngOnInit(): void {
  }
}
