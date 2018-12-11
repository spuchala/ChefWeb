import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCommentsComponent } from './chef-comments.component';

describe('ChefCommentsComponent', () => {
  let component: ChefCommentsComponent;
  let fixture: ComponentFixture<ChefCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
