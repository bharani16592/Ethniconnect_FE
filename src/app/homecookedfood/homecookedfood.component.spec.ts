import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecookedfoodComponent } from './homecookedfood.component';

describe('HomecookedfoodComponent', () => {
  let component: HomecookedfoodComponent;
  let fixture: ComponentFixture<HomecookedfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecookedfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecookedfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
