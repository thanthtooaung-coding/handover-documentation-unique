import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverDocumentationComponent } from './handover-documentation.component';

describe('HandoverDocumentationComponent', () => {
  let component: HandoverDocumentationComponent;
  let fixture: ComponentFixture<HandoverDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandoverDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
