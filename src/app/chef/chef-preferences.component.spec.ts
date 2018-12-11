import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPreferencesComponent } from './chef-preferences.component';

describe('ChefPreferencesComponent', () => {
  let component: ChefPreferencesComponent;
  let fixture: ComponentFixture<ChefPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
