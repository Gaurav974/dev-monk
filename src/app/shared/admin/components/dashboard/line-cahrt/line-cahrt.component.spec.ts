import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCahrtComponent } from './line-cahrt.component';

describe('LineCahrtComponent', () => {
  let component: LineCahrtComponent;
  let fixture: ComponentFixture<LineCahrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCahrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineCahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
