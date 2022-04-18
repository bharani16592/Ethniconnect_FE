import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalemailcompleteComponent } from './personalemailcomplete.component';

describe('PersonalemailcompleteComponent', () => {
  let component: PersonalemailcompleteComponent;
  let fixture: ComponentFixture<PersonalemailcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalemailcompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalemailcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
