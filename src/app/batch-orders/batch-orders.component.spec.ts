import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchOrdersComponent } from './batch-orders.component';

describe('BatchOrdersComponent', () => {
  let component: BatchOrdersComponent;
  let fixture: ComponentFixture<BatchOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
