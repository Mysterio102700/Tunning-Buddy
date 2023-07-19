import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayserviceComponent } from './delayservice.component';

describe('DelayserviceComponent', () => {
  let component: DelayserviceComponent;
  let fixture: ComponentFixture<DelayserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelayserviceComponent]
    });
    fixture = TestBed.createComponent(DelayserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
