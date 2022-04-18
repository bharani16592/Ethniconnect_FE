import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindChefComponent } from './find-chef.component';

describe('FindChefComponent', () => {
  let component: FindChefComponent;
  let fixture: ComponentFixture<FindChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
