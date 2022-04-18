import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalacctComponent } from './personalacct.component';

describe('PersonalacctComponent', () => {
  let component: PersonalacctComponent;
  let fixture: ComponentFixture<PersonalacctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalacctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalacctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
