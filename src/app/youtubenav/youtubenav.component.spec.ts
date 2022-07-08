import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubenavComponent } from './youtubenav.component';

describe('YoutubenavComponent', () => {
  let component: YoutubenavComponent;
  let fixture: ComponentFixture<YoutubenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
