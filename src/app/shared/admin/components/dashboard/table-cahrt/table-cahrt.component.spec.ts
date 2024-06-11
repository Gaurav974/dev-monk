import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCahrtComponent } from './table-cahrt.component';

describe('TableCahrtComponent', () => {
  let component: TableCahrtComponent;
  let fixture: ComponentFixture<TableCahrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCahrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
