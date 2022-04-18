import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCuisineComponent } from './select-cuisine.component';

describe('SelectCuisineComponent', () => {
  let component: SelectCuisineComponent;
  let fixture: ComponentFixture<SelectCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
