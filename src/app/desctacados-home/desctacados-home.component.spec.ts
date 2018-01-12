import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesctacadosHomeComponent } from './desctacados-home.component';

describe('DesctacadosHomeComponent', () => {
  let component: DesctacadosHomeComponent;
  let fixture: ComponentFixture<DesctacadosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesctacadosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesctacadosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
