import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalsignComponent } from './personalsign.component';

describe('PersonalsignComponent', () => {
  let component: PersonalsignComponent;
  let fixture: ComponentFixture<PersonalsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalsignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
