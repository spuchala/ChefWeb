import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChefComponent } from './register-chef.component';

describe('RegisterChefComponent', () => {
  let component: RegisterChefComponent;
  let fixture: ComponentFixture<RegisterChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
