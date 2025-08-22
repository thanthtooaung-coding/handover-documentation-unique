import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSectionComponent } from './learning-section.component';

describe('LearningSectionComponent', () => {
  let component: LearningSectionComponent;
  let fixture: ComponentFixture<LearningSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
