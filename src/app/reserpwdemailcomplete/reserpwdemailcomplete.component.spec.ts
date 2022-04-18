import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserpwdemailcompleteComponent } from './reserpwdemailcomplete.component';

describe('ReserpwdemailcompleteComponent', () => {
  let component: ReserpwdemailcompleteComponent;
  let fixture: ComponentFixture<ReserpwdemailcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserpwdemailcompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserpwdemailcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
