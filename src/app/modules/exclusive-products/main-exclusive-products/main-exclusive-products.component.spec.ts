import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExclusiveProductsComponent } from './main-exclusive-products.component';

describe('MainExclusiveProductsComponent', () => {
  let component: MainExclusiveProductsComponent;
  let fixture: ComponentFixture<MainExclusiveProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainExclusiveProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExclusiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
