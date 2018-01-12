import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersInferioresComponent } from './banners-inferiores.component';

describe('BannersInferioresComponent', () => {
  let component: BannersInferioresComponent;
  let fixture: ComponentFixture<BannersInferioresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersInferioresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersInferioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
