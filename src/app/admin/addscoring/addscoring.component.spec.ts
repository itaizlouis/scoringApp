import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscoringComponent } from './addscoring.component';

describe('AddscoringComponent', () => {
  let component: AddscoringComponent;
  let fixture: ComponentFixture<AddscoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddscoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
