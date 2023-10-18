import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResumeRevenueComponent } from './card-resume-revenue.component';

describe('CardResumeRevenueComponent', () => {
  let component: CardResumeRevenueComponent;
  let fixture: ComponentFixture<CardResumeRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardResumeRevenueComponent]
    });
    fixture = TestBed.createComponent(CardResumeRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
