import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCahrtComponent } from './bar-cahrt.component';

describe('BarCahrtComponent', () => {
  let component: BarCahrtComponent;
  let fixture: ComponentFixture<BarCahrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCahrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarCahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
