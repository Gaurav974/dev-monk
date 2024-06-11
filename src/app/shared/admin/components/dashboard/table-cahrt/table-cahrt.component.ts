import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Product {
  name: string;
  quantity: number;
  revenue: number;
}
@Component({
  selector: 'app-table-cahrt',
  templateUrl: './table-cahrt.component.html',
  styleUrls: ['./table-cahrt.component.scss']
})
export class TableCahrtComponent implements OnInit {
  public products: Product[] = [
    { name: 'Product A', quantity: 100, revenue: 5000 },
    { name: 'Product B', quantity: 150, revenue: 7500 },
    { name: 'Product C', quantity: 80, revenue: 4000 },
    { name: 'Product D', quantity: 120, revenue: 6000 },
    { name: 'Product E', quantity: 200, revenue: 10000 },
  ];

  public dataSource = new MatTableDataSource<Product>(this.products);
  public displayedColumns: string[] = ['name', 'quantity', 'revenue'];

  ngOnInit(): void {
  }

}
