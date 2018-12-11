import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefOrdersComponent } from './chef-orders.component';

describe('ChefOrdersComponent', () => {
  let component: ChefOrdersComponent;
  let fixture: ComponentFixture<ChefOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
