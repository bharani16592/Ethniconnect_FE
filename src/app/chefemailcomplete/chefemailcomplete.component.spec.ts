import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefemailcompleteComponent } from './chefemailcomplete.component';

describe('ChefemailcompleteComponent', () => {
  let component: ChefemailcompleteComponent;
  let fixture: ComponentFixture<ChefemailcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefemailcompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefemailcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
