import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloginComponent } from './personallogin.component';

describe('PersonalloginComponent', () => {
  let component: PersonalloginComponent;
  let fixture: ComponentFixture<PersonalloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
