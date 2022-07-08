import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyvideosComponent } from './add-myvideos.component';

describe('AddMyvideosComponent', () => {
  let component: AddMyvideosComponent;
  let fixture: ComponentFixture<AddMyvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMyvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
