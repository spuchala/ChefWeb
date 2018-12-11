import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSpecialitiesComponent } from './chef-specialities.component';

describe('ChefSpecialitiesComponent', () => {
  let component: ChefSpecialitiesComponent;
  let fixture: ComponentFixture<ChefSpecialitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefSpecialitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
