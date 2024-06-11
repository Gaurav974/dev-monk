import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogoutComponentComponent } from './dialog-logout-component.component';

describe('DialogLogoutComponentComponent', () => {
  let component: DialogLogoutComponentComponent;
  let fixture: ComponentFixture<DialogLogoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLogoutComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLogoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
