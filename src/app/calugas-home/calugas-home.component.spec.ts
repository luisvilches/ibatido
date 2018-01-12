import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalugasHomeComponent } from './calugas-home.component';

describe('CalugasHomeComponent', () => {
  let component: CalugasHomeComponent;
  let fixture: ComponentFixture<CalugasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalugasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalugasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
