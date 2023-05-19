import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSubNumberComponent } from './model-sub-number.component';

describe('ModelSubNumberComponent', () => {
  let component: ModelSubNumberComponent;
  let fixture: ComponentFixture<ModelSubNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelSubNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSubNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
