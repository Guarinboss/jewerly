import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColectionProductsComponent } from './new-colection-products.component';

describe('NewColectionProductsComponent', () => {
  let component: NewColectionProductsComponent;
  let fixture: ComponentFixture<NewColectionProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewColectionProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColectionProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
