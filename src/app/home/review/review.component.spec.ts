import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    component.review = {
      author: 'me',
      content: 'cool',
      created_at: '22-01-2002'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a review as input', () => {
    expect(component.review).toBeDefined();
  });
});
