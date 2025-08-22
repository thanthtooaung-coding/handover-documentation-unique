import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingTasksComponent } from './remaining-tasks.component';

describe('RemainingTasksComponent', () => {
  let component: RemainingTasksComponent;
  let fixture: ComponentFixture<RemainingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemainingTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
