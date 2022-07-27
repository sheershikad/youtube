import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UservideosComponent } from './uservideos.component';

describe('UservideosComponent', () => {
  let component: UservideosComponent;
  let fixture: ComponentFixture<UservideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UservideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UservideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
