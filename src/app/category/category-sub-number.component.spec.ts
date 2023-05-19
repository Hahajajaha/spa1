import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySubNumberComponent } from './category-sub-number.component';

describe('CategorySubNumberComponent', () => {
  let component: CategorySubNumberComponent;
  let fixture: ComponentFixture<CategorySubNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySubNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySubNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
